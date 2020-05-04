import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models';

@Pipe({
  name: 'clientsFilter'
})
export class ClientsFilterPipe implements PipeTransform {
  transform(clients: Client[], search: string = ''): Client[] {
    if (!search.trim()) {
      return clients;
    }
    return clients.filter(client => {
      return client.name.toLowerCase().includes(search.trim().toLowerCase());
    });
  }
}
