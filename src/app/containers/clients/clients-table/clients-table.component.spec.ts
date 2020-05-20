import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ClientsTableComponent } from './clients-table.component';
import { Client } from '../../../ui/models';

const testClient: Client = {
  id: 1,
  name: 'name',
  address: 'address',
  email: 'test@mail.com'
};

describe('ClientsTableComponent', () => {
  let component: ClientsTableComponent;
  let fixture: ComponentFixture<ClientsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsTableComponent ],
      imports: [ FormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsTableComponent);
    component = fixture.componentInstance;
    component.clients = [testClient];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table with the number of rows in body equal to the number of objects in property', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toEqual(component.clients.length);
  });

  it('should set property value on click edit button', () => {
    const button = fixture.debugElement.query(By.css('button.edit'));
    button.triggerEventHandler('click', {...component.clients[0]});
    expect(component.editingClient).toEqual(component.clients[0]);
  });

  it('should clear property value on click cancel button', () => {
    component.editingClient = {...component.clients[0]};
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button.cancel'));
    button.triggerEventHandler('click', null);
    expect(component.editingClient.id).toBeNull();
  });

  it('should emit property value on click delete button', () => {
    let result;
    component.deleteEmitter.subscribe(value => result = value);

    const button = fixture.debugElement.query(By.css('button.delete'));
    button.triggerEventHandler('click', component.clients[0].id);
    expect(result).toBe(component.clients[0].id);
  });

  it('should emit property value and clear property on click save button', () => {
    component.editingClient = {...component.clients[0]};
    fixture.detectChanges();

    let result;
    component.updateEmitter.subscribe(value => result = value);

    const button = fixture.debugElement.query(By.css('button.save'));
    button.triggerEventHandler('click', component.editingClient);
    expect(result).toEqual(component.clients[0]);
    expect(component.editingClient.id).toBeNull();
  });
});
