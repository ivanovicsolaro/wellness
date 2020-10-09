import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private alertCtrl: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  async action(type: string) {
    const alert = await this.alertCtrl.create({
      header: '¿Donde desea ir?',
      message: 'Seleccione la accion que desea realizar.',
      buttons: [
        {
          text: type === 'benefits' ? 'Ir a Sección Programa de asistencia al empleado' : 'Ir a Sección Recursos',
          handler: () => {
            let route = 'tablinks/' + type;
            this.router.navigate([route]);
          }
        },
        {
          text: 'Ver video',
          handler: () => {
            let videoId = type === 'benefits' ? 354015886 : 375651446;
            this.router.navigate(['/tablinks/main/video', videoId]);
          }
        },
        {
          text: 'Cancelar'
        }
      ]
    });

    return await alert.present();
  }

}
