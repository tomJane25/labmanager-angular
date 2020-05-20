import { Contract } from '../../ui/models';

export interface ContractState {
  contracts: Contract[];
  error?: any;
}

export const initialContractState: ContractState = {
  contracts: null,
  error: null
};
