import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { SpinnerService } from '../../services/spinner.service';
import { Subscription } from 'rxjs';

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

  constructor(private spinnerService: SpinnerService) {
  }

  ngOnInit(): void {
    this.spinnerSub = this.spinnerService.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  ngOnDestroy(): void {
    if (this.spinnerSub){
      this.spinnerSub.unsubscribe();
    }
  }
}
