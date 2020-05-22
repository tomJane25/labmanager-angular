import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ClientsComponent } from './clients.component';
import { ClientService } from '../../ui/services/client.service';
import { RootStoreModule} from '../../store';
import { Client } from '../../ui/models';
import { ActionTypes } from '../../store/client-store/actions';

const testClient: Client = {
  id: '1',
  name: 'name',
  address: 'address',
  email: 'test@mail.com'
};

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        RootStoreModule,
        HttpClientTestingModule
      ],
      providers: [ ClientService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch LoadClientsAction on ngOnInit', () => {
    component.ngOnInit();
    expect(store.reducerManager.dispatcher._value.type).toBe(ActionTypes.LOAD_CLIENTS);
  });

  it('should dispatch AddClientAction on addClient()', () => {
    component.addClient(testClient);
    expect(store.reducerManager.dispatcher._value.type).toBe(ActionTypes.ADD_CLIENT);
  });

  it('should dispatch UpdateClientAction on updateClient()', () => {
    component.updateClient(testClient);
    expect(store.reducerManager.dispatcher._value.type).toBe(ActionTypes.UPDATE_CLIENT);
  });

  it('should dispatch DeleteClientAction on deleteClient()', () => {
    component.deleteClient(testClient.id);
    expect(store.reducerManager.dispatcher._value.type).toBe(ActionTypes.DELETE_CLIENT);
  });

  it('should change isAddingClient property on changeIsAddingClient()', () => {
    component.changeIsAddingClient(true);
    expect(component.isAddingClient).toBeTruthy();
  });
});
