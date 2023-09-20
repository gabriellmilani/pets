import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PetModel, PetsModel } from '../cadastro/cadastro.page';
import { NativeStorage } from 'ionic-native';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.page.html',
  styleUrls: ['./tela-inicial.page.scss'],
})
export class TelaInicialPage implements OnInit {
  pet!: PetModel;
  pets!: PetsModel;

  constructor(public navCtrl: NavController) {
    NativeStorage.getItem('pets')
       .then(
         data => {
          this.pets = data;
          window.location.reload();

         } 
       );
  }

  ngOnInit(): void {
    
  }

  goToCadastrarPet(): void{
    this.navCtrl.navigateForward('cadastrar-pet');
  }

  goToLogin(){
    this.navCtrl.navigateForward('login');
  }

  mock() {
    this.pet = new PetModel(1, "Fred", "Dog", 2, "assets/img/uGaVs2EVRmpVFmH2FiVC_labrador-amarelo.webp");
    this.pets = new PetsModel([this.pet]); 
    this.pets.result.push(new PetModel(1, "Fred", "Dog", 2, "assets/img/uGaVs2EVRmpVFmH2FiVC_labrador-amarelo.webp"));
    this.pets.result.push(new PetModel(1, "Fred", "Dog", 2, "assets/img/uGaVs2EVRmpVFmH2FiVC_labrador-amarelo.webp"));
    this.pets.result.push(new PetModel(1, "Fred", "Dog", 2, "assets/img/uGaVs2EVRmpVFmH2FiVC_labrador-amarelo.webp"));
  }

  async getItem() {
     
  }
  
}
