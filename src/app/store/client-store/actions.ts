import { Action } from '@ngrx/store';
import { Client } from '../../ui/models';

export enum ActionTypes {
  LOAD_CLIENTS = '[Client] Load clients',
  LOAD_CLIENTS_SUCCESS = '[Client] Load clients success',
  ADD_CLIENT = '[Client] Add client',
  ADD_CLIENT_SUCCESS = '[Client] Add client success',
  UPDATE_CLIENT = '[Client] Update client',
  UPDATE_CLIENT_SUCCESS = '[Client] Update client success',
  DELETE_CLIENT = '[Client] Delete client',
  DELETE_CLIENT_SUCCESS = '[Client] Delete client success',
  FAILURE_CLIENT_HTTP_RESPONSE = '[Client] Failure client http response'
}

export class LoadClientsAction implements Action {
  public readonly type = ActionTypes.LOAD_CLIENTS;
}

export class LoadClientsSuccessAction implements Action {
  public readonly type = ActionTypes.LOAD_CLIENTS_SUCCESS;
  constructor(public payload: {items: Client[]}) {}
}

export class AddClientAction implements Action {
  public readonly type = ActionTypes.ADD_CLIENT;
  constructor(public payload: {item: Client}) {}
}

export class AddClientSuccessAction implements Action {
  public readonly type = ActionTypes.ADD_CLIENT_SUCCESS;
  constructor(public payload: {item: Client}) {}
}

export class UpdateClientAction implements Action {
  public readonly type = ActionTypes.UPDATE_CLIENT;
  constructor(public payload: {item: Client}) {}
}

export class UpdateClientSuccessAction implements Action {
  public readonly type = ActionTypes.UPDATE_CLIENT_SUCCESS;
  constructor(public payload: {item: Client}) {}
}

export class DeleteClientAction implements Action {
  public readonly type = ActionTypes.DELETE_CLIENT;
  constructor(public payload: {item: Client}) {}
}

export class DeleteClientSuccessAction implements Action {
  public readonly type = ActionTypes.DELETE_CLIENT_SUCCESS;
  constructor(public payload: {item: Client}) {}
}

export class FailureClientHttpResponseAction implements Action {
  public readonly type = ActionTypes.FAILURE_CLIENT_HTTP_RESPONSE;
  constructor(public payload: {error: string}) {}
}

export type ClientActions =
  LoadClientsAction |
  LoadClientsSuccessAction |
  FailureClientHttpResponseAction |
  AddClientAction |
  AddClientSuccessAction |
  UpdateClientAction |
  UpdateClientSuccessAction |
  DeleteClientAction |
  DeleteClientSuccessAction;
