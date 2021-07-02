import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-terms-conditions-modal',
  templateUrl: './terms-conditions-modal.component.html',
  styleUrls: ['./terms-conditions-modal.component.scss'],
})

export class TermsConditionsModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController) { }

  ngOnInit() {}

  /**
   * Close modal
   * @param data 
   */
  async closeModal() {
    const alert = await this.alertCtrl.create({
      header: 'Terminos y Condiciones',
      message: '¿Acepta los terminos y condiciones?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.modalCtrl.dismiss(true);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            this.modalCtrl.dismiss(false);
          }
        }
      ]
    });

    return await alert.present();
    
  }


}
