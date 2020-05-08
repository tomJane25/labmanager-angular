import { ClientsFilterPipe } from './clients-filter';
import { Client } from '../models';

describe('ClientsFilterPipe', () => {
  const clientsFilterPipe = new ClientsFilterPipe();
  const testClients: Client[] = [
    {
      id: 1,
      name: 'test name 1',
      address: 'address',
      email: 'test@email.com'
    },
    {
      id: 2,
      name: 'test name 2',
      address: 'address',
      email: 'test@email.com'
    }
  ];

  it('should not transform when search string empty', () => {
    expect(clientsFilterPipe.transform(testClients)).toBe(testClients);
  });

  it('should filter clients where client name includes search string', () => {
    expect(clientsFilterPipe.transform(testClients, 'name 2')[0]).toBe(testClients[1]);
  });
});
