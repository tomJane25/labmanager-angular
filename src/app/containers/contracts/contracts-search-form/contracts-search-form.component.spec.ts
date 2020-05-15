import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsSearchFormComponent } from './contracts-search-form.component';

describe('ContractsSearchFormComponent', () => {
  let component: ContractsSearchFormComponent;
  let fixture: ComponentFixture<ContractsSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
