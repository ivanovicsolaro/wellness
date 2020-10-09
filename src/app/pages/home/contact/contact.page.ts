import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { ContactFormModalComponent } from './modals/contact-form-modal/contact-form-modal.component';
import { OutsideArgentinaModalComponent } from './modals/outside-argentina-modal/outside-argentina-modal.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})

export class ContactPage implements OnInit {

  logoStyle: any = {};
  phoneNumberOne: string = '1139884055';
  phoneNumberTwo: string = '08002665243';
  whatsAppContent: any = {
    phoneNumber: '5491162661987',
    message: 'Hola, me gustaría me ayuden.'
  };

  constructor(private platform: Platform,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.logoStyle = {
      width: this.platform.width() * 0.5 + 'px',
      height: 'auto'
    };
  }

  /**
   * Shows alert on clicking one of the buttons
   * @param button 
   */
  async showButtonAlert(button: string) {
    const alert = await this.alertCtrl.create({
      header: 'Antes de Continuar',
      message: '¿Tienes motivos para creer que tu vida está en riesgo?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Si',
          handler: async () => {
            this.showRiskAlert();
          }
        },
        {
          text: 'No',
          handler: async () => {
            switch(button) {
              case 'whatsapp':
                this.openWhatsapp();
                break;
              case 'showForm':
                this.showFormModal();
                break;
              case 'callNumberOne':
                this.callNumber(this.phoneNumberOne);
                break;
              case 'callNumberTwo':
                this.callNumber(this.phoneNumberTwo);
                break;
              default:
                break;
            }
          }
        }
      ]
    });

    return await alert.present();
  }

  /**
   * Show an alert when a user select thinks is at risk
   */
  async showRiskAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Llamar a numero gratuito',
      message: 'Comunícate en forma inmediata al número gratuito del Programa de Asistencia al Empleado. Un profesional calificado te brindará asistencia.',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {

          }
        }
      ]
    });

    return await alert.present();
  }

  /**
   * Show modal with info from outside Argentina
   */
  async showOutsideModal() {
    const modal = await this.modalCtrl.create({
      component: OutsideArgentinaModalComponent
    });

    return await modal.present();
  }

  /**
   * Open whatsapp and send message
   */
  openWhatsapp() {
    const url = `https://wa.me/${this.whatsAppContent.phoneNumber}?text=${this.whatsAppContent.message}`;
    window.open(url, "_system");
  }

  /**
   * Show modal with contact form
   */
  async showFormModal() {
    const modal = await this.modalCtrl.create({
      component: ContactFormModalComponent
    });

    modal.onDidDismiss().then(({data}) => {
      console.log(data);
    });
    return await modal.present();
  }

  /**
   * Call a phone number
   * @param number 
   */
  callNumber(number: any) {
    window.open(`tel:${number}`, '_system');
  }

}
