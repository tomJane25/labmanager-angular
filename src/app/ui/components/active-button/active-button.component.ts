import {Component, EventEmitter, Input, Output,} from '@angular/core';

@Component({
  selector: 'app-active-button',
  templateUrl: './active-button.component.html',
  styleUrls: ['./active-button.component.scss']
})
export class ActiveButtonComponent {
  isActive = false;
  @Input() titleInactive: string;
  @Input() titleActive: string;
  @Output() isActiveEmitter = new EventEmitter();

  changeIsActive() {
    this.isActive = !this.isActive;
    this.isActiveEmitter.emit(this.isActive);
  }
}
