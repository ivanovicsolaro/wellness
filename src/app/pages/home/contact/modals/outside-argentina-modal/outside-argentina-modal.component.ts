import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-outside-argentina-modal',
  templateUrl: './outside-argentina-modal.component.html',
  styleUrls: ['./outside-argentina-modal.component.scss'],
})

export class OutsideArgentinaModalComponent implements OnInit {

  countries: any = [
    { name: 'Uruguay', phoneNumber: '000 4135 9831 68' },
    { name: 'Colombia', phoneNumber: '0180 0518 5202' },
    { name: 'Chile', phoneNumber: '800 392658' },
    { name: 'Perú', phoneNumber: '0 800 76744' },
    { name: 'México', phoneNumber: '01800 993 470' }
  ];

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController) { }

  ngOnInit() {}
  
  /**
   * Show alert to allow user to call the country phone number
   * @param country 
   */
  async callNumber(country : any) {
    const alert = await this.alertCtrl.create({
      header: `Llamar - ${country.name}`,
      message: `¿Desear realizar llamada al número <b>${country.phoneNumber}</b>?`,
      buttons: [
        {
          text: 'Llamar',
          handler: () => {
            window.open(`tel:${country.phoneNumber}`, '_system');
          }
        },
        {
          text: 'Cerrar'
        }
      ]
    });

    return await alert.present();
  }
  /**
   * Close current modal
   * @param data 
   */
  closeModal(data: any = null) {
    this.modalCtrl.dismiss(data);
  }

}
