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
  isLoading$: Observable<boolean>;
  error$: Observable<any>;
  isAddingContract: boolean;
  searchParams: ContractsSearchParams;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store$.dispatch(new ContractActions.LoadContractsAction());
    this.store$.dispatch(new ClientActions.LoadClientsAction());
    this.contracts$ = this.store$.select(ContractSelectors.selectAllContracts);
    this.clients$ = this.store$.select(ClientSelectors.selectAllClients);
    this.isLoading$ = this.store$.select(ContractSelectors.selectContractsIsLoading);
    this.error$ = this.store$.select(ContractSelectors.selectContractsError);
  }

  changeIsAddingContract(isAdding){
    this.isAddingContract = isAdding;
  }

  addContract(contract){
    this.store$.dispatch(new ContractActions.AddContractAction({item: contract}));
  }

  updateContract(contract){
    this.store$.dispatch(new ContractActions.UpdateContractAction({item: contract}));
  }

  deleteContract(contractId){
    this.store$.dispatch(new ContractActions.DeleteContractAction({itemId: contractId}));
  }

  filterContracts(searchParams){
    this.searchParams = {...searchParams};
  }
}
