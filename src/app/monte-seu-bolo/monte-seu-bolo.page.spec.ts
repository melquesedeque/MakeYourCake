import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonteSeuBoloPage } from './monte-seu-bolo.page';

describe('MonteSeuBoloPage', () => {
  let component: MonteSeuBoloPage;
  let fixture: ComponentFixture<MonteSeuBoloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonteSeuBoloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonteSeuBoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
