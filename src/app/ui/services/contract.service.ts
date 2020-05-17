import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Contract } from '../models';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService extends HttpService {

  private readonly CONTRACT_URL = 'https://my-json-server.typicode.com/tomJane25/labmanager_JSON/contracts';

  getContracts(): Observable<Contract[]> {
    return this.get<Contract>(this.CONTRACT_URL);
  }

  addContract(contract: Contract): Observable<Contract> {
    return this.post<Contract>(this.CONTRACT_URL, contract).pipe(
      tap(() => this.notificationService.success(`Added contract ${contract.number}`))
    );
  }

  updateContract(contract: Contract): Observable<Contract> {
    return this.put<Contract>(this.CONTRACT_URL + `/${contract.id}`, contract).pipe(
      tap(() => this.notificationService.success(`Updated contract ${contract.number}`))
    );
  }

  deleteContract(contractId: number): Observable<any> {
    return this.delete<any>(this.CONTRACT_URL + `/${contractId}`).pipe(
      tap(() => this.notificationService.success(`Deleted contract`))
    );
  }
}
