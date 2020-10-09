import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
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
    this.globalSrv.showLoading();

    let contactForm;

    try {
      contactForm = await this.apiSrv.sendMessageContactForm(this.contactForm.value).toPromise();
    } catch(e) {
      console.error(e);
      contactForm = null;
    }

    if (contactForm) {
      const buttons = [{
        text: 'Aceptar',
        handler: () => {
          this.closeModal();
        }
      }];
      this.globalSrv.showAlert('Éxito', contactForm.message, buttons);
    }
    this.globalSrv.hideLoading();
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
