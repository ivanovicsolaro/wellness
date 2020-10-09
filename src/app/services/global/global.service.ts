import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  isLoading: boolean = false;

  constructor(private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) { }

  /**
   * Show loading component
   */
  async showLoading() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      duration: 10000
    }).then(loadingEl => {
      loadingEl.present().then(() => {
        if (!this.isLoading) loadingEl.dismiss();
      });
    });
  }

  /**
   * Hide loading component
   */
  async hideLoading() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss();
  }

  /**
   * Show an alert component
   * @param header 
   * @param message 
   * @param buttons 
   */
  async showAlert(header: string, message: string, buttons: any = [], backdropDismiss: boolean = false) {
    if (buttons.length <= 0) buttons = ['Aceptar'];
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons,
      backdropDismiss
    });
    return await alert.present();
  }
}
