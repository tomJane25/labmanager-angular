import { ContractState, initialContractState } from './state';
import { ContractActions, ActionTypes } from './actions';

export const contractReducer = (state= initialContractState, action: ContractActions): ContractState => {
  switch (action.type) {
    case ActionTypes.LOAD_CONTRACTS:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case ActionTypes.LOAD_CONTRACTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        contracts: action.payload.items,
        error: null
      };
    case ActionTypes.ADD_CONTRACT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case ActionTypes.ADD_CONTRACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        contracts: [...state.contracts, action.payload.item],
        error: null
      };
    case ActionTypes.UPDATE_CONTRACT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case ActionTypes.UPDATE_CONTRACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        contracts: state.contracts.map(item => {
          if (item.id === action.payload.item.id) {
            return action.payload.item;
          }
          return item;
        }),
        error: null
      };
    case ActionTypes.DELETE_CONTRACT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case ActionTypes.DELETE_CONTRACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        contracts: state.contracts.filter(item => item.id !== action.payload.itemId),
        error: null
      };
    default:
      return state;
  }
};
