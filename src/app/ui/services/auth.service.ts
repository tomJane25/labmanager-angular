import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../models';
import { SpinnerService } from './spinner.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient,
    private spinnerService: SpinnerService,
    private notificationService: NotificationService
  ) {}

  get token(): string {
    return localStorage.getItem('fb-token');
  }

  get userEmail(): string {
    return localStorage.getItem('fb-email');
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  login(user: User): Observable<AuthResponse>{
    user.returnSecureToken = true;
    this.spinnerService.setIsLoading(true);
    return this.http.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user
    )
      .pipe(
        tap((response) => {
          this.spinnerService.setIsLoading(false);
          this.notificationService.success(`Welcome back, ${response.email}`);
          this.setToken(response);
        }),
        catchError( error => {
          this.spinnerService.setIsLoading(false);
          this.handleError(error);
          return throwError(error);
        })
      );
  }

  private setToken(response: AuthResponse){
    const expiresDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
    localStorage.setItem('fb-token', response.idToken);
    localStorage.setItem('fb-token-expires', expiresDate.toString());
    localStorage.setItem('fb-refresh-token', response.refreshToken);
    localStorage.setItem('fb-email', response.email);
  }

  private handleError(error: HttpErrorResponse){
    const message = error.error.error.message;
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email not found');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Invalid password');
        break;
      case 'USER_DISABLED':
        this.error$.next('Your account has been disabled by administrator');
        break;
    }
  }

  logout(){
    localStorage.clear();
  }
}
