import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ContractState } from './state';

const selectContractsState = createFeatureSelector<ContractState>('contract');

export const selectAllContracts = createSelector(
  selectContractsState,
  state => state.contracts
);

export const selectContractsIsLoading = createSelector(
  selectContractsState,
  state => state.isLoading
);

export const selectContractsError = createSelector(
  selectContractsState,
  state => state.error
);
