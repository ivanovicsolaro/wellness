import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  isLoading: boolean = true;
  communications: any = [];
  
  constructor(private apiSrv: ApiService,
              private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  /**
   * Load communications
   */
  async loadData() {
    this.isLoading = true;
    this.communications = [];

    let communications = [];
    try {
      communications = await this.apiSrv.getCommunications().toPromise();

    } catch(e) {
      console.error(e);
      communications = [];
    }

    console.log(communications);
    this.communications = [...communications];
    this.isLoading = false;
  }

  goToDetail(com) {
    console.log(com);
    this.router.navigate(['/tablinks/news/detail', com.id]);
  }

}
