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
  isAddingClient: boolean;
  searchString: string;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store$.dispatch(new ClientActions.LoadClientsAction());
    this.clients$ = this.store$.select(ClientSelectors.selectAllClients);
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

  deleteClient(client){
    this.store$.dispatch(new ClientActions.DeleteClientAction({item: client}));
  }
}
