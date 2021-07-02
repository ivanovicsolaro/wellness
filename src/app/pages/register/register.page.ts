import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { TermsConditionsModalComponent } from './modals/terms-conditions-modal/terms-conditions-modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  companyCode: string;
  countries: any = [];
  registerForm: FormGroup;
  errors: any = {};
  termsAndConditionsAccepted: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private navCtrl: NavController,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController,
              private apiSrv: ApiService,
              private formBuilder: FormBuilder,
              private globalSrv: GlobalService) { 
    this.initForm();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('companyCode')) {
        this.navCtrl.setDirection('root');
        this.router.navigate(['/create-account']);
        return;
      }
      this.companyCode = paramMap.get('companyCode');
      this.loadData();
    });
  }

  /**
   * Load data for the form
   */
  async loadData() {
    this.globalSrv.showLoading();
    this.countries = [];

    try {
      this.countries = await this.apiSrv.getCountryList().toPromise();
    } catch(e) {
      this.countries = [];
    }

    try {
      let company = await this.apiSrv.checkCompanyCode(this.companyCode).toPromise();
      if (company) {
        this.registerForm.get('company').setValue(company.name);
        this.registerForm.get('companyRegisterCode').setValue(company.register_code);
        console.log(company);
      }
    } catch(e) {
      console.error(e);
    }

    this.globalSrv.hideLoading();
  }

  /**
   * Show modal with terms and conditions
   */
  async showTermsConditionsModal() {

    if (this.termsAndConditionsAccepted) {
      this.register();
      return;
    }
    const modal = await this.modalCtrl.create({
      component: TermsConditionsModalComponent
    });
    modal.onDidDismiss().then(({data}) => {
      if (data) {
        this.termsAndConditionsAccepted = true;
        this.register();
      }
    });
    return await modal.present();
  }

  /**
   * Register a new user in the app
   */
  async register() {
    this.errors = {};
    let response;
    try {
      response = await this.apiSrv.registerUser(this.registerForm.value).toPromise();
    } catch(e) {
      if (e && e.status) {
        switch(e.status) {
          case 422:
            Object.keys(e.error.errors).forEach(key => {
              this.errors[key] = e.error.errors[key][0];
            });
            break;
          case 404:
            let message = e.error.message ? e.error.message : 'Error al registrar usuario.';
            this.globalSrv.showAlert('Error',message);
            break;
          default:
            break;
        }
        return;
      }
      return;
    }

    if (response) {
      this.registerForm.reset();
      const alert = await this.alertCtrl.create({
        header: 'Éxito',
        message: 'Cuenta creada con éxito. Revisar email con credenciales.',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              this.navCtrl.setDirection('root');
              this.router.navigate(['/login']);
            }
          }
        ]
      });
      return await alert.present();
    }
  }

  /**
   * Initializar form with its fields
   */
  private initForm() {
    this.registerForm = this.formBuilder.group({
      company:[null, Validators.required],
      companyRegisterCode:[null, Validators.required],
      name:[null, Validators.required],
      country:[null,Validators.required],
      email:[null, {validators: Validators.required, updateOn: "blur"}],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      accept: [null, Validators.required]
    });
  }

}
