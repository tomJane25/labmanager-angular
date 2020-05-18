import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client, Contract } from '../../../ui/models';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { clearObject } from '../../../ui/utils';

@Component({
  selector: 'app-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.scss']
})
export class ContractsTableComponent {
  fontAwesome = {
    faTimes,
    faPencilAlt
  };
  editingContract: Contract = new Contract();
  @Input() contracts: Contract[];
  @Input() clients: Client[];
  @Output() updateEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();


  getClientNameById(clientId: number): string {
    if (this.clients) {
      const client = this.clients.find(item => item.id === clientId);
      if (client) {
        return client.name;
      } else {
        return 'Client not found';
      }
    }
  }

  edit(contract) {
    this.editingContract = {...contract};
  }

  cancel() {
    clearObject(this.editingContract);
  }

  update(editingContract) {
    this.updateEmitter.emit({...editingContract});
    clearObject(this.editingContract);
  }

  delete(contract) {
    this.deleteEmitter.emit(contract);
  }
}
