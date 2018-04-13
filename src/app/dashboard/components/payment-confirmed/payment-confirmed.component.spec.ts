import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfirmedComponent } from './payment-confirmed.component';

describe('PaymentConfirmedComponent', () => {
  let component: PaymentConfirmedComponent;
  let fixture: ComponentFixture<PaymentConfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentConfirmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
