import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMngComponent } from './order-mng.component';

describe('OrderMngComponent', () => {
  let component: OrderMngComponent;
  let fixture: ComponentFixture<OrderMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
