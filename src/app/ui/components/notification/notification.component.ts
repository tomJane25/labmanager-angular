import {Component, OnDestroy, OnInit} from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import {Subscription} from 'rxjs';
import {Notification} from '../../models';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  fontAwesome = {
    faTimes,
  };
  delay = 3000;
  notifications: Notification[] = [];
  errors: Notification[] = [];
  nSub: Subscription;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.nSub = this.notificationService.notification$.subscribe(notification => {
      if (notification.type === 'error') {
        this.errors.push(notification);
      } else {
        this.notifications.push(notification);
        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          this.notifications.shift();
        }, this.delay);
      }
    });
  }

  closeError(index){
    this.errors.splice(index, 1);
  }

  ngOnDestroy(): void {
    if (this.nSub){
      this.nSub.unsubscribe();
    }
  }
}
