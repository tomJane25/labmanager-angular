import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Client } from '../../ui/models';
import { RootStoreState, ClientActions, ClientSelectors } from '../../store';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients$: Observable<Client[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<any>;
  isAddingClient: boolean;
  searchString: string;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store$.dispatch(new ClientActions.LoadClientsAction());
    this.clients$ = this.store$.select(ClientSelectors.selectAllClients);
    this.isLoading$ = this.store$.select(ClientSelectors.selectClientsIsLoading);
    this.error$ = this.store$.select(ClientSelectors.selectClientsError);
  }

  changeIsAddingClient(isAdding){
    this.isAddingClient = isAdding;
  }

  addClient(client){
    this.store$.dispatch(new ClientActions.AddClientAction({item: client}));
  }

  updateClient(client){
    this.store$.dispatch(new ClientActions.UpdateClientAction({item: client}));
  }

  deleteClient(clientId){
    this.store$.dispatch(new ClientActions.DeleteClientAction({itemId: clientId}));
  }
}
