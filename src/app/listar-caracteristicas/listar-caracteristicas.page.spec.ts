import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCaracteristicasPage } from './listar-caracteristicas.page';

describe('ListarCaracteristicasPage', () => {
  let component: ListarCaracteristicasPage;
  let fixture: ComponentFixture<ListarCaracteristicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCaracteristicasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCaracteristicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
