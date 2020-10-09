import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.page.html',
  styleUrls: ['./resource-detail.page.scss'],
})

export class ResourceDetailPage implements OnInit {

  resourceId: number;
  defaultHref:string = 'tablinks/resources';
  resource: any = {};
  resourceType:string;

  constructor(private apiSrv: ApiService,
              private router: Router,
              private navCtrl: NavController,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('resourceId')) {
        return;
      } 
      this.resourceId = +paramMap.get('resourceId');
      this.loadData();
    });
  }

  async loadData() {
    let resource;
    try {
      resource = await this.apiSrv.getResource(this.resourceId).toPromise();
    } catch(e) {
      console.error(e);
      resource = null;
    }

    this.resource = {...resource};
    console.log(this.resource);
    if (this.resource && Object.hasOwnProperty.call(this.resource, 'type') && Object.hasOwnProperty.call(this.resource.type, 'name')) {
      this.resourceType = this.resource.type.name;
    }
    this.defaultHref = `${this.defaultHref}/list/${this.resource.topic_id}`;
    // console.log(resource);
  }

}
