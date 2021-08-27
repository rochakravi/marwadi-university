import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2020Component } from './c2020.component';

describe('C2020Component', () => {
  let component: C2020Component;
  let fixture: ComponentFixture<C2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
