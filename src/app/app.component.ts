import { Component, OnInit } from '@angular/core';

import { AlertController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { Plugins } from '@capacitor/core';
import { ApiService } from './services/api/api.service';
const { Storage } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Inicio',
      url: '/tablinks/main',
      icon: 'home',
      selected: false
    },
    {
      title: 'Beneficios',
      url: '/tablinks/benefits',
      icon: 'heart',
      selected: false
    },
    {
      title: 'Recursos',
      url: '/tablinks/resources',
      icon: 'star',
      selected: false
    },
    {
      title: 'Novedades',
      url: '/tablinks/news',
      icon: 'notifications',
      selected: false
    },
    {
      title: 'Contacto',
      url: '/tablinks/contact',
      icon: 'mail',
      selected: false
    },
    {
      title: 'Salir',
      action: 'logout',
      icon: 'power',
      selected: false
    }
  ];

  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              private navCtrl: NavController,
              private router: Router,
              private apiSrv: ApiService,
              private alertCtrl: AlertController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {}

  /**
   * Control menu item actions
   * @param page 
   */
  menuAction(page: any) {
    page.selected = true;
    this.appPages = this.appPages.map(p => {
      p.selected = p.title === page.title ? true : false;
      return p;
    })
    if (Object.hasOwnProperty.call(page,'url')) {
      this.navCtrl.setDirection('root');
      this.router.navigate([page.url]);
    } else if (Object.hasOwnProperty.call(page,'action')) {
      switch(page.action) {
        case 'logout':
          this.logout();
          break;
        default:
          break;
      }
    }
  }

  /**
   * Log an user out of the app
   */
  async logout() {
    const alert = await this.alertCtrl.create(
      {
        header: 'Cerrar sesión',
        message: '¿Desea salir de la aplicación?',
        buttons: [
          {
            text: 'Salir',
            handler: async () => {
              try {
                let response = await this.apiSrv.logout().toPromise();
                console.log(response);
              } catch(e) {
                console.error(e);
              }
              this.navCtrl.setDirection('root');
              this.router.navigate(['/login']);
            }
          },
          'Cancelar'
        ]
      }
    );

    return await alert.present();
  }
}
