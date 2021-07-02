import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-footer-login',
  templateUrl: './footer-login.component.html',
  styleUrls: ['./footer-login.component.scss'],
})

export class FooterLoginComponent implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {}

  /**
   * Show alert on click
   */
  async showHelpAlert() {
    const alert = await this.alertCtrl.create(
      {
        header: 'Ayuda',
        message: 'Por favor, escribir a <b>info@grupowellnesslatina.com</b> para asistencia',
        backdropDismiss: false,
        buttons: ['Aceptar']
      }
    );
    return await alert.present();
  }

}
