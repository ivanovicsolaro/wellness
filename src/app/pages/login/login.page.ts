import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalService } from 'src/app/services/global/global.service';

import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
const { Storage } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private menuCtrl: MenuController,
              private alertCtrl: AlertController,
              private formBuilder: FormBuilder,
              private globalSrv: GlobalService,
              private navCtrl: NavController,
              private router: Router,
              private apiSrv: ApiService) { 
    this.initForm();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  /**
   * Logs an user in the app
   */
  async login() {
    if (!this.loginForm.valid) {
      let message = this.validateForm();
      // console.log(message);
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message,
        buttons: ['Aceptar']
      });
      return await alert.present();
    }
    this.globalSrv.showLoading();
    let value = {
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    console.log(value);
    let loginResponse;
    try {
      loginResponse = await this.apiSrv.login(value).toPromise();
    }catch(e) {
      console.error(e);
      loginResponse = null;
    }
    if (!loginResponse) {
      this.globalSrv.hideLoading();
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Error iniciando sesión',
        buttons: ['Aceptar']
      });
      return await alert.present();
      return;
    }
    await Storage.set({
      key: 'token',
      value: loginResponse.token
    });
    await Storage.set({
      key: 'user',
      value: JSON.stringify(loginResponse.user)
    });
    this.menuCtrl.enable(true);
    this.globalSrv.hideLoading();
    this.navCtrl.setDirection('root');
    this.router.navigate(['/']);
  }

  /**
   * Validate login form
   */
  private validateForm() {
    let message = '';
    let fields = {
      username: 'Usuario',
      password: 'Contraseña'
    };
    Object.keys(this.loginForm.controls).forEach(control => {
      if (this.loginForm.controls[control].invalid) {
        message += `<p>Campo ${fields[control]} es requerido.</p>`;
      }
    });
    return message;
  }

  /**
   * Init login form
   */
  private initForm() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}
