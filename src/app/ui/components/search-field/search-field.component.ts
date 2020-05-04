import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
  @Input() placeholder: string;
  @Input() searchString: string;
  @Output() searchStringChange = new EventEmitter();

  onSearchStringChange(model: string) {
    this.searchString = model;
    this.searchStringChange.emit(model);
  }
}
