import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastro(){
    this.navCtrl.navigateForward('cadastro');
  }goToTelaInicial(){
    this.navCtrl.navigateForward('tela-inicial');
  }
}