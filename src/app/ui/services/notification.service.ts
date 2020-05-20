import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Notification } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notification$ = new Subject<Notification>();

  success(text: string) {
    this.notification$.next({type: 'success', text});
  }

  warning(text: string) {
    this.notification$.next({type: 'warning', text});
  }

  error(text: string) {
    this.notification$.next({type: 'error', text});
  }
}
