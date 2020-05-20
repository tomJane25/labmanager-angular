import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ClientActions, ClientSelectors, ContractActions, ContractSelectors, RootStoreState } from '../../store/';
import { Client, Contract, ContractsSearchParams } from '../../ui/models';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  contracts$: Observable<Contract[]>;
  clients$: Observable<Client[]>;
  isAddingContract: boolean;
  searchParams: ContractsSearchParams;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store$.dispatch(new ContractActions.LoadContractsAction());
    this.store$.dispatch(new ClientActions.LoadClientsAction());
    this.contracts$ = this.store$.select(ContractSelectors.selectAllContracts);
    this.clients$ = this.store$.select(ClientSelectors.selectAllClients);
  }

  setIsAddingContract(isAdding){
    this.isAddingContract = isAdding;
  }

  addContract(contract){
    this.store$.dispatch(new ContractActions.AddContractAction({item: contract}));
  }

  updateContract(contract){
    this.store$.dispatch(new ContractActions.UpdateContractAction({item: contract}));
  }

  deleteContract(contract){
    this.store$.dispatch(new ContractActions.DeleteContractAction({item: contract}));
  }

  filterContracts(searchParams){
    this.searchParams = {...searchParams};
  }
}
