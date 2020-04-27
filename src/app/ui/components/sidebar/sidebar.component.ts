import { Component} from '@angular/core';
import { faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  fontAwesome = {
    faUsers,
    faHandshake
  };
}
