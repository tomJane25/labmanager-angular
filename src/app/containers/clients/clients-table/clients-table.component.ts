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
  editingClient: Client = new Client();
  @Input() clients: Client[];
  @Output() updateEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();

  edit(client) {
    this.editingClient = {...client};
  }

  cancel() {
    clearObject(this.editingClient);
  }

  update(editingClient) {
    this.updateEmitter.emit({...editingClient});
    clearObject(this.editingClient);
  }

  delete(client) {
    this.deleteEmitter.emit(client);
  }
}
