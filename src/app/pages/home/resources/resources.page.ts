import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})

export class ResourcesPage implements OnInit {

  topics: any = [];

  constructor(private apiSrv: ApiService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  async loadData() {
    this.topics = [];
    let topics;
    try {
      topics = await this.apiSrv.getTopicList().toPromise();
    } catch(e) {
      topics = [];
    }

    this.topics = [...topics];
  }

}
