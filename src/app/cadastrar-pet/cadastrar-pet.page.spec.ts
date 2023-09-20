import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarPetPage } from './cadastrar-pet.page';

describe('CadastrarPetPage', () => {
  let component: CadastrarPetPage;
  let fixture: ComponentFixture<CadastrarPetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
