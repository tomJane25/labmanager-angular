import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { SpinnerService } from '../../services/spinner.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  fontAwesome = {
    faMicroscope
  };
  isLoading: boolean;
  spinnerSub: Subscription;

  constructor(
    private spinnerService: SpinnerService,
    public auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.spinnerSub = this.spinnerService.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    if (this.spinnerSub){
      this.spinnerSub.unsubscribe();
    }
  }
}
