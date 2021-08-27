import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2021Component } from './c2021.component';

describe('C2021Component', () => {
  let component: C2021Component;
  let fixture: ComponentFixture<C2021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
