import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Client } from '../models';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends HttpService {

  private readonly CLIENT_URL = 'https://my-json-server.typicode.com/tomJane25/labmanager_JSON/clients';

  getClients(): Observable<Client[]> {
    this.spinnerService.setIsLoading(true);
    return this.get<Client>(this.CLIENT_URL).pipe(
      tap(() => this.spinnerService.setIsLoading(false)),
      catchError (error => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.error(`Clients not loaded. Http failure response. Status ${error.status}`);
        return throwError(error);
      })
    );
  }

  addClient(client: Client): Observable<Client> {
    this.spinnerService.setIsLoading(true);
    return this.post<Client>(this.CLIENT_URL, client).pipe(
      tap(() => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.success(`Added client ${client.name}`);
      }),
      catchError (error => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.error(`Client ${client.name} not added. Http failure response. Status ${error.status}`);
        return throwError(error);
      })
    );
  }

  updateClient(client: Client): Observable<Client> {
    this.spinnerService.setIsLoading(true);
    return this.put<Client>(this.CLIENT_URL + `/${client.id}`, client).pipe(
      tap(() => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.success(`Updated client ${client.name}`);
      }),
      catchError (error => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.error(`Client ${client.name} not updated. Http failure response. Status ${error.status}`);
        return throwError(error);
      })
    );
  }

  deleteClient(client: Client): Observable<any> {
    this.spinnerService.setIsLoading(true);
    return this.delete<any>(this.CLIENT_URL + `/${client.id}`).pipe(
      tap(() => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.warning(`Deleted client ${client.name}`);
      }),
      catchError (error => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.error(`Client ${client.name} not deleted. Http failure response. Status ${error.status}`);
        return throwError(error);
      })
    );
  }
}
