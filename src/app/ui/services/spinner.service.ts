import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public isLoading$ = new Subject<boolean>();

  setIsLoading(isLoading: boolean) {
    this.isLoading$.next(isLoading);
  }
}
