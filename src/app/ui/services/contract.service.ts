import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contract } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {
  }

  getContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>('https://my-json-server.typicode.com/tomJane25/labmanager_JSON/contracts');
  }

  addContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>('https://my-json-server.typicode.com/tomJane25/labmanager_JSON/contracts', contract);
  }

  updateContract(contract: Contract): Observable<Contract> {
    return this.http.put<Contract>(`https://my-json-server.typicode.com/tomJane25/labmanager_JSON/contracts/${contract.id}`, contract);
  }

  deleteContract(contractId: number): Observable<any> {
    return this.http.delete<any>(`https://my-json-server.typicode.com/tomJane25/labmanager_JSON/contracts/${contractId}`);
  }
}
