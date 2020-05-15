import { Action } from '@ngrx/store';
import { Client, Contract } from '../../ui/models';

export enum ActionTypes {
  LOAD_CONTRACTS = '[Contract] Load contracts',
  LOAD_CONTRACTS_SUCCESS = '[Contract] Load contracts success',
  ADD_CONTRACT = '[Contract] Add contract',
  ADD_CONTRACT_SUCCESS = '[Contract] Add contract success',
  UPDATE_CONTRACT = '[Contract] Update contract',
  UPDATE_CONTRACT_SUCCESS = '[Contract] Update contract success',
  DELETE_CONTRACT = '[Contract] Delete contract',
  DELETE_CONTRACT_SUCCESS = '[Contract] Delete contract success',
  FAILURE_CONTRACT_HTTP_RESPONSE = '[Contract] Failure contract http response'
}

export class LoadContractsAction implements Action {
  public readonly type = ActionTypes.LOAD_CONTRACTS;
}

export class LoadContractsSuccessAction implements Action {
  public readonly type = ActionTypes.LOAD_CONTRACTS_SUCCESS;
  constructor(public payload: {items: Contract[]}) {}
}

export class AddContractAction implements Action {
  public readonly type = ActionTypes.ADD_CONTRACT;
  constructor(public payload: {item: Contract}) {}
}

export class AddClientSuccessAction implements Action {
  public readonly type = ActionTypes.ADD_CONTRACT_SUCCESS;
  constructor(public payload: {item: Contract}) {}
}

export class UpdateContractAction implements Action {
  public readonly type = ActionTypes.UPDATE_CONTRACT;
  constructor(public payload: {item: Contract}) {}
}

export class UpdateContractSuccessAction implements Action {
  public readonly type = ActionTypes.UPDATE_CONTRACT_SUCCESS;
  constructor(public payload: {item: Contract}) {}
}

export class DeleteContractAction implements Action {
  public readonly type = ActionTypes.DELETE_CONTRACT;
  constructor(public payload: {itemId: number}) {}
}

export class DeleteContractSuccessAction implements Action {
  public readonly type = ActionTypes.DELETE_CONTRACT_SUCCESS;
  constructor(public payload: {itemId: number}) {}
}

export class FailureContractHttpResponseAction implements Action {
  public readonly type = ActionTypes.FAILURE_CONTRACT_HTTP_RESPONSE;
  constructor(public payload: { error: string }) {}
}

export type ContractActions =
  LoadContractsAction |
  LoadContractsSuccessAction |
  AddContractAction |
  AddClientSuccessAction |
  FailureContractHttpResponseAction |
  UpdateContractAction |
  UpdateContractSuccessAction |
  DeleteContractAction |
  DeleteContractSuccessAction;
