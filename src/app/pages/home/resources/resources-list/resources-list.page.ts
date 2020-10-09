import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.page.html',
  styleUrls: ['./resources-list.page.scss'],
})

export class ResourcesListPage implements OnInit {

  topicId: any;
  resources: any = [];
  topic: any = {};
  isLoading: boolean = true;
  icons: any = {
    'Enlace': 'link',
    'Libro': 'book',
    'Nota': 'clipboard',
    'Video': 'videocam',
    'Audio': 'musical-note'
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private navCtrl: NavController,
              private apiSrv: ApiService,
              private globalSrv: GlobalService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('topicId')) {
        this.navCtrl.setDirection('root');
        this.router.navigate(['/tablinks/resources']);
        return;
      }
      this.topicId = paramMap.get('topicId');
      this.loadData();
    });
  }

  /**
   * Load data
   */
  async loadData() {
    this.globalSrv.showLoading();
    this.isLoading = true;
    this.resources = [];
    let topic;
    let resources;
    try {
      topic = await this.apiSrv.getTopic(this.topicId).toPromise();
      // topic = null;
    } catch(e){
      console.error(e);
      topic = null;
    }

    if (!topic) {
      this.globalSrv.hideLoading();
      this.globalSrv.showAlert('Error', 'No se puede obtener el tema ni recursos.', ['Aceptar']);
      return;
    }
    this.topic = {...topic};
    this.resources = Object.hasOwnProperty.call(this.topic, 'resources') ? [...this.topic.resources] : [];
    this.resources = this.resources.map(r => {
      r['icon'] = Object.hasOwnProperty.call(this.icons,r.type.name) ? this.icons[r.type.name] : 'help';
      return r;
    });
    this.globalSrv.hideLoading();
    this.isLoading = false;
  }

  detail(resource) {
    console.log(resource);
    this.router.navigate(['tablinks/resources/detail', resource.id]);
  }

}
