import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Client } from '../models';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends HttpService {

  private readonly CLIENT_URL = 'https://my-json-server.typicode.com/tomJane25/labmanager_JSON/clients';

  getClients(): Observable<Client[]> {
    return this.get<Client>(this.CLIENT_URL);
  }

  addClient(client: Client): Observable<Client> {
    return this.post<Client>(this.CLIENT_URL, client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.put<Client>(this.CLIENT_URL + `/${client.id}`, client);
  }

  deleteClient(clientId: number): Observable<any> {
    return this.delete<any>(this.CLIENT_URL + `/${clientId}`);
  }
}
