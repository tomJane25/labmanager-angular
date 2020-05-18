import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ClientService } from '../../ui/services/client.service';
import * as clientActions from './actions';

@Injectable()
export class ClientEffects {
  constructor(
    private clientService: ClientService,
    private actions$: Actions,
  ) {}

  @Effect()
  loadClients$: Observable<Action> = this.actions$.pipe(
    ofType<clientActions.LoadClientsAction>(clientActions.ActionTypes.LOAD_CLIENTS),
    switchMap(action => this.clientService.getClients().pipe(
      map(
        items =>
          new clientActions.LoadClientsSuccessAction({items})
      ),
      catchError(error =>
        of(new clientActions.FailureClientHttpResponseAction({error: error.message})))
      )
    )
  );

  @Effect()
  addClient$: Observable<Action> = this.actions$.pipe(
    ofType<clientActions.AddClientAction>(clientActions.ActionTypes.ADD_CLIENT),
    switchMap(action => this.clientService.addClient(action.payload.item).pipe(
      map(
        item =>
          new clientActions.AddClientSuccessAction({item})
      ),
      catchError(error =>
        of(new clientActions.FailureClientHttpResponseAction({error: error.message})))
      )
    )
  );

  @Effect()
  updateClient$: Observable<Action> = this.actions$.pipe(
    ofType<clientActions.UpdateClientAction>(clientActions.ActionTypes.UPDATE_CLIENT),
    switchMap(action => this.clientService.updateClient(action.payload.item).pipe(
      map(
        item =>
          new clientActions.UpdateClientSuccessAction({item})
      ),
      catchError(error =>
        of(new clientActions.FailureClientHttpResponseAction({error: error.message})))
      )
    )
  );

  @Effect()
  deleteClient$: Observable<Action> = this.actions$.pipe(
    ofType<clientActions.DeleteClientAction>(clientActions.ActionTypes.DELETE_CLIENT),
    switchMap(action => this.clientService.deleteClient(action.payload.item).pipe(
      map(
        item =>
          new clientActions.DeleteClientSuccessAction({item: action.payload.item})
      ),
      catchError(error =>
        of(new clientActions.FailureClientHttpResponseAction({error: error.message})))
      )
    )
  );
}
