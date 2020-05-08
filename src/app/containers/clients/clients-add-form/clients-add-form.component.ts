import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-clients-add-form',
  templateUrl: './clients-add-form.component.html',
  styleUrls: ['./clients-add-form.component.scss']
})
export class ClientsAddFormComponent implements OnInit {
  form: FormGroup;
  @Output() submitEmitter = new EventEmitter();

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  submit() {
    this.submitEmitter.emit({...this.form.value});
    this.form.reset();
  }
}
