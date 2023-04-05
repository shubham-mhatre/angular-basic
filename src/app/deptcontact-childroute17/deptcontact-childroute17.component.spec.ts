import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptcontactChildroute17Component } from './deptcontact-childroute17.component';

describe('DeptcontactChildroute17Component', () => {
  let component: DeptcontactChildroute17Component;
  let fixture: ComponentFixture<DeptcontactChildroute17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptcontactChildroute17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptcontactChildroute17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
