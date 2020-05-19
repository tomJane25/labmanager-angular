import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client, Contract } from '../../../ui/models';

@Component({
  selector: 'app-contracts-add-form',
  templateUrl: './contracts-add-form.component.html',
  styleUrls: ['./contracts-add-form.component.scss']
})
export class ContractsAddFormComponent implements OnInit {
  form: FormGroup;
  @Output() submitEmitter = new EventEmitter();
  @Input() clients: Client[];

  ngOnInit() {
    this.form = new FormGroup({
      number: new FormControl('', Validators.required),
      clientId: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      startDate: new FormControl('', [Validators.required]),
      finishDate: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    const newContract: Contract = {
      ...this.form.value,
      balance: this.form.value.amount,
      clientId: this.form.value.clientId,
      status: 'OPEN'
    };
    this.submitEmitter.emit(newContract);
    this.form.reset();
  }
}
