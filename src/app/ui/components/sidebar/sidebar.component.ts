import { Component} from '@angular/core';
import { faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';

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

  constructor(public auth: AuthService) {}
}
