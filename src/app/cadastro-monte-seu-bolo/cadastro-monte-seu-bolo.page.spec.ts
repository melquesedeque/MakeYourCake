import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMonteSeuBoloPage } from './cadastro-monte-seu-bolo.page';

describe('CadastroMonteSeuBoloPage', () => {
  let component: CadastroMonteSeuBoloPage;
  let fixture: ComponentFixture<CadastroMonteSeuBoloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMonteSeuBoloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMonteSeuBoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
