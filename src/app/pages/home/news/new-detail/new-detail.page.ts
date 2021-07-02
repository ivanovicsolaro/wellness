import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})

export class NewDetailPage implements OnInit {

  comId: number;
  com: any = {};
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute,
              private apiSrv: ApiService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe(paramMap => {
      this.comId = +paramMap.get('id');
      this.loadData();
    });
  }

  /**
   * Load data detail of communication
   */
  async loadData() {
    this.isLoading = true;
    let com;
    try {
      com = await this.apiSrv.getCommunicationDetail(this.comId).toPromise();
    } catch(e) {
      console.error(e);
      com = null;
    }

    if (com) {
      this.com = {...com};
    }

    this.isLoading = false;
  }

}
