import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-contact-form-modal',
  templateUrl: './contact-form-modal.component.html',
  styleUrls: ['./contact-form-modal.component.scss'],
})

export class ContactFormModalComponent implements OnInit {

  contactForm: FormGroup;
  consultationTypes: any = [
    'Legal',
    'Financiero Contable',
    'Psicología',
    'Nutricional',
    'Maternidad y Lactancia',
    'Informativa',
    'Gerencial'
  ];
  errors: any = {
    name: null,
    lastName: null,
    phoneNumber: null,
    subject: null,
    message: null
  };

  constructor(private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private globalSrv: GlobalService,
              private apiSrv: ApiService,
              private formBuilder: FormBuilder) { 
    this.initForm();
  }

  ngOnInit() {}

  /**
   * Send message from contact form
   */
  async send() {
    console.log(this.contactForm);
    Object.keys(this.errors).forEach(key => this.errors[key] = null);
    if (!this.contactForm.valid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        let control = this.contactForm.controls[key];
        if (!control.valid) {
          this.errors[key] = 'Campo es requerido';
        }
      });
      return;
    }
    const loading = await this.loadingCtrl.create({
      message: 'Enviando'
    });

    loading.present();

    let contactForm;
    let buttons = [];
    let message = "";
    try {
      contactForm = await this.apiSrv.sendMessageContactForm(this.contactForm.value).toPromise();
      message = contactForm.message;
    } catch(e) {
      console.error(e);
      message = (e && Object.hasOwnProperty.call('message')) ? e.message : 'Error al enviar formulario';
      buttons = [{
        text: 'Aceptar',
        handler: () => {
          this.closeModal();
        }
      }];
      contactForm = null;
    }

    await loading.dismiss();

    if (contactForm) {
      buttons = [{
        text: 'Aceptar',
        handler: () => {
          this.closeModal();
        }
      }];
    }
    this.globalSrv.showAlert('Éxito', message, buttons, false);
  }

  /**
   * Close current modal
   * @param data 
   */
  closeModal(data: any = null) {
    this.modalCtrl.dismiss(data);
  }

  private initForm() {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

}
