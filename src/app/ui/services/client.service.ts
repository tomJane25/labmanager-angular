import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient ) {
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('https://my-json-server.typicode.com/tomJane25/labmanager_JSON/clients');
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>('https://my-json-server.typicode.com/tomJane25/labmanager_JSON/clients', client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`https://my-json-server.typicode.com/tomJane25/labmanager_JSON/clients/${client.id}`, client);
  }

  deleteClient(clientId: number): Observable<any> {
    return this.http.delete<any>(`https://my-json-server.typicode.com/tomJane25/labmanager_JSON/clients/${clientId}`);
  }
}
