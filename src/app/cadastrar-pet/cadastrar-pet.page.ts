import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativeStorage } from 'ionic-native';
import { PetModel, PetsModel } from '../cadastro/cadastro.page';


@Component({
  selector: 'app-cadastrar-pet',
  templateUrl: './cadastrar-pet.page.html',
  styleUrls: ['./cadastrar-pet.page.scss'],
})
export class CadastrarPetPage {
  pets!: PetsModel;
  id: number = 0;
  name: string = "";
  raca: string = "";
  idade: number = 0;
  img: string = "";

  constructor(public navCtrl: NavController) {
  }

  goToBack(){
    this.navCtrl.navigateBack('tela-inicial');
  }
  cadastrarPet(){
    const pet = new PetModel(this.id, this.name,this.raca, this.idade, "assets/img/uGaVs2EVRmpVFmH2FiVC_labrador-amarelo.webp");
    if (this.pets != null) {
      this.pets.result.push(new PetModel(this.id, this.name,this.raca, this.idade, "assets/img/uGaVs2EVRmpVFmH2FiVC_labrador-amarelo.webp"))
    } else {
      this.pets = new PetsModel([pet]); 
    }
    
    this.setPet("pet", this.pets)
    this.navCtrl.navigateBack('tela-inicial');
  }

  async setPet(key: string, pets: PetsModel) {
    //NativeStorage.keys
    console.log("adicionou");
    NativeStorage.setItem(key, pets).then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
      }

  async removeSavedPet(key: string) {
      NativeStorage.remove(key);
      console.log("removida");
    }

  async getItem() {
      NativeStorage.getItem('pets')
        .then(
          data => this.pets = data,
          error => console.error(error)
        );
   }


}
