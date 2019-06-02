import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaComprasPage } from './minha-compras.page';

describe('MinhaComprasPage', () => {
  let component: MinhaComprasPage;
  let fixture: ComponentFixture<MinhaComprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaComprasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
