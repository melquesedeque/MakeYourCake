import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarPedidoMontePage } from './finalizar-pedido-monte.page';

describe('FinalizarPedidoMontePage', () => {
  let component: FinalizarPedidoMontePage;
  let fixture: ComponentFixture<FinalizarPedidoMontePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizarPedidoMontePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarPedidoMontePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
