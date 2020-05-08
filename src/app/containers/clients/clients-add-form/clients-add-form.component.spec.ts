import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAddFormComponent } from './clients-add-form.component';

describe('ClientsAddFormComponent', () => {
  let component: ClientsAddFormComponent;
  let fixture: ComponentFixture<ClientsAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form with 3 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('address')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should mark name as invalid if value is empty', () => {
    const control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalse();
  });

  it('should mark address as invalid if value is empty', () => {
    const control = component.form.get('address');
    control.setValue('');
    expect(control.valid).toBeFalse();
  });

  it('should mark email as invalid if value is empty', () => {
    const control = component.form.get('email');
    control.setValue('');
    expect(control.valid).toBeFalse();
  });

  it('should mark email as invalid if value does not match email', () => {
    const control = component.form.get('email');
    control.setValue('some invalid value');
    expect(control.valid).toBeFalse();
  });

  it('should emit form value on submit', () => {
    const valueForTest = {
      name: 'test name',
      address: 'test address',
      email: 'test@email.com'
    };
    let valueFromForm: object;
    component.form.get('name').setValue(valueForTest.name);
    component.form.get('address').setValue(valueForTest.address);
    component.form.get('email').setValue(valueForTest.email);
    component.submitEmitter.subscribe(value => valueFromForm = value);
    component.submit();
    expect(valueFromForm).toEqual(valueForTest);
  });
});
