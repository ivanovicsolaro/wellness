import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})

export class CreateAccountPage implements OnInit {

  createAccountForm: FormGroup;

  constructor(private alertCtrl: AlertController,
              private menuCtrl: MenuController,
              private apiSrv: ApiService,
              private router: Router,
              private formBuilder: FormBuilder) { 
    this.initForm();
  }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.menuCtrl.enable(false);
  }

  /**
   * Check if a company code exists and redirect to register form
   */
  async createAccount() {
    if (!this.createAccountForm.valid) {
      const header = 'Error';
      let message = '';
      const fields = {
        'companyCode': 'Código Empresa'
      };
      Object.keys(this.createAccountForm.controls).forEach(key => {
        const formControl = this.createAccountForm.controls[key];
        if (!formControl.valid) {
          message += `<p>El campo ${fields[key]} es requerido.</p>`;
        }
      });
      this.showAlert(header, message,['Aceptar']);
      return;
    }

    let response;
    const companyCode = this.createAccountForm.get('companyCode').value;
    try {
      response = await this.apiSrv.checkCompanyCode(companyCode).toPromise();
    } catch (e) {
      let message = e;
      if (e && Object.hasOwnProperty.call(e, 'error') && Object.hasOwnProperty.call(e.error, 'message')) {
        message = e.error.message;
      }
      this.showAlert('Error', message);
      return;
    }

    if (response) {
      console.log(response);
      this.router.navigate(['/register', companyCode]);
    }
  }


  ionViewWillLeave()
  {
    this.menuCtrl.enable(true);
  }

  /**
   * Initialize form
   */
  private initForm() {
    this.createAccountForm = this.formBuilder.group({
      companyCode: [null, Validators.required]
    });
  }

  /**
   * Show an alert with custom header. message and buttons
   * @param header 
   * @param message 
   * @param buttons 
   */
  private async showAlert(header: string, message: string, buttons: any = []) {

    if (buttons.length <= 0) buttons = ['Aceptar'];

    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons
    });

    return await alert.present();
  }

}
