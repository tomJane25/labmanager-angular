import {Component, EventEmitter, Input, Output,} from '@angular/core';

@Component({
  selector: 'app-add-item-button',
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.scss']
})
export class AddItemButtonComponent {
  isAdding: boolean;
  @Input() title: string;
  @Output() changeIsAdding = new EventEmitter();

  onChangeIsAdding() {
    this.isAdding = !this.isAdding;
    this.changeIsAdding.emit(this.isAdding);
  }
}
