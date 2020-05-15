import { Contract } from '../../ui/models';

export interface ContractState {
  isLoading?: boolean;
  contracts: Contract[];
  error?: any;
}

export const initialContractState: ContractState = {
  isLoading: false,
  contracts: null,
  error: null
};
