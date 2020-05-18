import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {catchError, map, switchMap } from 'rxjs/operators';

import { ContractService } from '../../ui/services/contract.service';
import * as contractActions from './actions';

@Injectable()
export class ContractEffects {
  constructor(
    private contractService: ContractService,
    private actions$: Actions
  ) {}

  @Effect()
  loadContracts$: Observable<Action> = this.actions$.pipe(
    ofType<contractActions.LoadContractsAction>(contractActions.ActionTypes.LOAD_CONTRACTS),
    switchMap(action => this.contractService.getContracts().pipe(
      map(
        items =>
          new contractActions.LoadContractsSuccessAction({items})
      ),
      catchError(error =>
        of(new contractActions.FailureContractHttpResponseAction({error: error.message})))
      )
    )
  );

  @Effect()
  addContract$: Observable<Action> = this.actions$.pipe(
    ofType<contractActions.AddContractAction>(contractActions.ActionTypes.ADD_CONTRACT),
    switchMap(action => this.contractService.addContract(action.payload.item).pipe(
      map(
        item =>
          new contractActions.AddClientSuccessAction({item})
      ),
      catchError(error =>
        of(new contractActions.FailureContractHttpResponseAction({error: error.message})))
      )
    )
  );

  @Effect()
  updateContract$: Observable<Action> = this.actions$.pipe(
    ofType<contractActions.UpdateContractAction>(contractActions.ActionTypes.UPDATE_CONTRACT),
    switchMap(action => this.contractService.updateContract(action.payload.item).pipe(
      map(
        item =>
          new contractActions.UpdateContractSuccessAction({item})
      ),
      catchError(error =>
        of(new contractActions.FailureContractHttpResponseAction({error: error.message})))
      )
    )
  );

  @Effect()
  deleteContract$: Observable<Action> = this.actions$.pipe(
    ofType<contractActions.DeleteContractAction>(contractActions.ActionTypes.DELETE_CONTRACT),
    switchMap(action => this.contractService.deleteContract(action.payload.item).pipe(
      map(
        item =>
          new contractActions.DeleteContractSuccessAction({item: action.payload.item})
      ),
      catchError(error =>
        of(new contractActions.FailureContractHttpResponseAction({error: error.message}))
      )
      )
    )
  );
}
