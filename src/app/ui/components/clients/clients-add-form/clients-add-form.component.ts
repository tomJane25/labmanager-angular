import { Component, EventEmitter, Output } from '@angular/core';

import { Client } from '../../../models';
import { clearObject } from '../../../utils';

@Component({
  selector: 'app-clients-add-form',
  templateUrl: './clients-add-form.component.html',
  styleUrls: ['./clients-add-form.component.scss']
})
export class ClientsAddFormComponent {

  addingClient: Client = {
    id: null,
    name: null,
    address: null,
    email: null
  };

  @Output() addClient = new EventEmitter();

  add(addingClient) {
    this.addClient.emit({...addingClient});
    clearObject(this.addingClient);
  }
}
