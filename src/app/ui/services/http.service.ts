import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from '../models';
import { NotificationService } from './notification.service';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService {

  constructor(
    private http: HttpClient,
    protected notificationService: NotificationService,
    protected spinnerService: SpinnerService
  ) {}

  get<T extends Entity>(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }

  post<T extends Entity>(url, payload: T): Observable<T> {
    return this.http.post<T>(url, payload);
  }

  put<T extends Entity>(url, payload: T): Observable<T> {
    return this.http.put<T>(url, payload);
  }

  delete<T extends Entity>(url): Observable<any> {
    return this.http.delete<any>(url);
  }
}
