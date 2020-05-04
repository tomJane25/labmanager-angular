import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Client } from '../../../ui/models';
import { clearObject } from '../../../ui/utils';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent {
  fontAwesome = {
    faPencilAlt,
    faTimes,
  };

  @Input() clients: Client[];

  editingClient: Client = {
    id: null,
    name: null,
    address: null,
    email: null
  };

  @Output() updateClient = new EventEmitter();
  @Output() deleteClient = new EventEmitter();

  edit(client) {
    this.editingClient = {...client};
  }

  cancel() {
    clearObject(this.editingClient);
  }

  update(editingClient) {
    this.updateClient.emit({...editingClient});
    clearObject(this.editingClient);
  }

  delete(clientId) {
    this.deleteClient.emit(clientId);
  }
}
