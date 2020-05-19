import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Client } from '../models';
import { HttpService } from './http.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends HttpService {

  private readonly CLIENT_URL = environment.dbUrl + '/clients';

  getClients(): Observable<Client[]> {
    this.spinnerService.setIsLoading(true);
    return this.get<Client>(this.CLIENT_URL + '.json').pipe(
      map(response => {
        return Object.keys(response).map(key => ({
          ...response[key],
          id: key,
        }));
      }),
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
    return this.post<Client>(this.CLIENT_URL + '.json', client).pipe(
      map(response => {
        return {
          ...client,
          id: response.name
        };
      }),
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
    return this.put<Client>(this.CLIENT_URL + `/${client.id}.json`, client).pipe(
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
    return this.delete<any>(this.CLIENT_URL + `/${client.id}.json`).pipe(
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
