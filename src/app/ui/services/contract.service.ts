import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Contract } from '../models';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService extends HttpService {

  private readonly CONTRACT_URL = 'https://my-json-server.typicode.com/tomJane25/labmanager_JSON/contracts';

  getContracts(): Observable<Contract[]> {
    this.spinnerService.setIsLoading(true);
    return this.get<Contract>(this.CONTRACT_URL).pipe(
      tap(() => {
        this.spinnerService.setIsLoading(false);
      }),
      catchError (error => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.error(`Contracts not loaded. Http failure response. Status ${error.status}`);
        return throwError(error);
      })
    );
  }

  addContract(contract: Contract): Observable<Contract> {
    this.spinnerService.setIsLoading(true);
    return this.post<Contract>(this.CONTRACT_URL, contract).pipe(
      tap(() => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.success(`Added contract ${contract.number}`);
      }),
      catchError (error => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.error(`Contract ${contract.number} not added. Http failure response. Status ${error.status}`);
        return throwError(error);
      })
    );
  }

  updateContract(contract: Contract): Observable<Contract> {
    this.spinnerService.setIsLoading(true);
    return this.put<Contract>(this.CONTRACT_URL + `/${contract.id}`, contract).pipe(
      tap(() => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.success(`Updated contract ${contract.number}`);
      }),
      catchError (error => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.error(`Contract ${contract.number} not updated. Http failure response. Status ${error.status}`);
        return throwError(error);
      })
    );
  }

  deleteContract(contract: Contract): Observable<any> {
    this.spinnerService.setIsLoading(true);
    return this.delete<any>(this.CONTRACT_URL + `/${contract.id}`).pipe(
      tap(() => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.warning(`Deleted contract ${contract.number}`);
      }),
      catchError (error => {
        this.spinnerService.setIsLoading(false);
        this.notificationService.error(`Contract ${contract.number} not deleted. Http failure response. Status ${error.status}`);
        return throwError(error);
      })
    );
  }
}
