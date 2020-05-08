import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ActiveButtonComponent } from './active-button.component';

describe('ActiveButtonComponent', () => {
  let component: ActiveButtonComponent;
  let fixture: ComponentFixture<ActiveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit property on click', () => {
    let property = false;
    component.isActiveEmitter.subscribe(value => property = value);
    component.changeIsActive();
    expect(property).toBeTrue();
  });

  it('should change text content when property is changed', () => {
    component.titleActive = 'Active';
    component.titleInactive = 'Inactive';

    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('button'));
    const element: HTMLElement = debugElement.nativeElement;
    expect(element.textContent).toBe('Inactive');

    component.isActive = true;
    fixture.detectChanges();
    expect(element.textContent).toBe('Active');
  });

  it('should add activated class when active', () => {
    component.isActive = true;
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('button'));
    const element: HTMLElement = debugElement.nativeElement;
    expect(element.classList.contains('activated')).toBeTruthy();
  });

  it('should change property if button was clicked', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.isActive).toBeTruthy();
  });
});
