import { ClientState, initialClientState } from './state';
import { ClientActions, ActionTypes } from './actions';

export const clientReducer = (state= initialClientState, action: ClientActions): ClientState => {
  switch (action.type) {
    case ActionTypes.LOAD_CLIENTS:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case ActionTypes.LOAD_CLIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clients: action.payload.items,
        error: null
      };
    case ActionTypes.ADD_CLIENT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case ActionTypes.ADD_CLIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clients: [...state.clients, action.payload.item],
        error: null
      };
    case ActionTypes.UPDATE_CLIENT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case ActionTypes.UPDATE_CLIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clients: state.clients.map(item => {
          if (item.id === action.payload.item.id) {
            return action.payload.item;
          }
          return item;
        }),
        error: null
      };
    case ActionTypes.DELETE_CLIENT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case ActionTypes.DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clients: state.clients.filter(item => item.id !== action.payload.itemId),
        error: null
      };
    case ActionTypes.FAILURE_CLIENT_HTTP_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
