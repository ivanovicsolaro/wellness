import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Plugins } from '@capacitor/core';
import { ApiService } from 'src/app/services/api/api.service';
const { Storage } = Plugins;

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})

export class PageTitleComponent implements OnInit {

  companyLogo: string;

  constructor(private apiSrv: ApiService) { }

  ngOnInit() {
    this.loadData();
  }

  /**
   * Load logos data
   */
  async loadData() {
    const storage = await Storage.get({key: 'user'});
    const user = JSON.parse(storage.value);
    this.companyLogo = `${environment.apiUrl}${user.company.logo_image}`;
  }

  /**
   * Error loading company logo
   */
  async errorLoadingImage() {
    let user;
    try {
      user = await this.apiSrv.isAuthenticated().toPromise();
    } catch(e) {
      user = null;
    }
    if (user) {
      this.companyLogo = `${environment.apiUrl}${user.company.logo_image}`;
    }
  }

}
