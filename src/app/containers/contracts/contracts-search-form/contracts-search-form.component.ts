import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client, ContractsSearchParams } from '../../../ui/models';

@Component({
  selector: 'app-contracts-search-form',
  templateUrl: './contracts-search-form.component.html',
  styleUrls: ['./contracts-search-form.component.scss']
})
export class ContractsSearchFormComponent implements OnInit {
  form: FormGroup;
  searchParams: ContractsSearchParams = {
    clientId: null,
    contractStatus: null
  };
  @Output() changeEmitter = new EventEmitter();
  @Input() clients: Client[];

  ngOnInit() {
    this.form = new FormGroup({
      clientId: new FormControl(''),
      status: new FormControl(''),
    });
  }

  onChange() {
    this.searchParams.clientId = this.form.value.clientId;
    this.searchParams.contractStatus = this.form.value.status;
    this.changeEmitter.emit(this.searchParams);
  }
}
