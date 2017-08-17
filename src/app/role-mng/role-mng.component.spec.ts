import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMngComponent } from './role-mng.component';

describe('RoleMngComponent', () => {
  let component: RoleMngComponent;
  let fixture: ComponentFixture<RoleMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
