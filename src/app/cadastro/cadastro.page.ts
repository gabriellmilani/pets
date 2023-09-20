import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativeStorage } from 'ionic-native';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastro(){
    this.navCtrl.navigateForward('cadastro');
  }
  
  goToLogin(){
    this.navCtrl.navigateForward('login');
  }

  async setCoin(key: string, pet: PetModel) {
    //NativeStorage.keys
    console.log("adicionou");
    NativeStorage.setItem(key, pet).then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
      }

    async removeSavedCoin(key: string) {
      NativeStorage.remove(key);
      console.log("removida");
    }
}

export class PetModel {
  id: number;
  name: string;
  raca: string;
  idade: number;
  img: string;

  constructor(id: number, name: string, raca: string, idade: number, img: string) {
      this.id = id;
      this.name = name;
      this.raca = raca;
      this.idade = idade;
      this.img = img
  }
}

export class PetsModel {
  result: [PetModel];
  
  constructor(result: [PetModel]) {
      this.result = result;
  }
}