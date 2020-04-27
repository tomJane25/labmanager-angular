import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ClientState } from './state';

const selectClientsState = createFeatureSelector<ClientState>('client');

export const selectAllClients = createSelector(
  selectClientsState,
  state => state.clients
);

export const selectClientsIsLoading = createSelector(
  selectClientsState,
  state => state.isLoading
);

export const selectClientsError = createSelector(
  selectClientsState,
  state => state.error
);
