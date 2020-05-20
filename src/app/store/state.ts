import { ClientState } from './client-store';
import { ContractState } from './contract-store';

export interface State {
  clients: ClientState.ClientState;
  contracts: ContractState.ContractState;
}
