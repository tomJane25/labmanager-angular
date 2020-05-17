import {Component, OnDestroy, OnInit} from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import {Subscription} from 'rxjs';
import {Notification} from '../../models';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  delay = 3000;
  notifications: Notification[] = [];
  nSub: Subscription;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.nSub = this.notificationService.notification$.subscribe(notification => {
      this.notifications.push(notification);

      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.notifications.shift();
      }, this.delay);
    });
  }

  ngOnDestroy(): void {
    if (this.nSub){
      this.nSub.unsubscribe();
    }
  }
}
