import { Client } from '../../ui/models';

export interface ClientState {
  clients: Client[];
  error?: any;
}

export const initialClientState: ClientState = {
  clients: null,
  error: null
};
