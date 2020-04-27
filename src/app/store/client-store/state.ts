import { Client } from '../../ui/models';

export interface ClientState {
  isLoading?: boolean;
  clients: Client[];
  error?: any;
}

export const initialClientState: ClientState = {
  isLoading: false,
  clients: null,
  error: null
};
