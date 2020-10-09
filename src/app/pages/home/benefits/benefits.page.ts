import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.page.html',
  styleUrls: ['./benefits.page.scss'],
})
export class BenefitsPage implements OnInit {

  isLoading: boolean = true;
  benefits: any = [];

  constructor(private apiSrv: ApiService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  /**
   * Load data for view
   */
  async loadData() {
    this.isLoading = true;
    this.benefits = [];
    let response;
    try {
      response = await this.apiSrv.getCompanyList().toPromise();
    } catch(e) {
      response = null;
    }
    if (response) {
      this.benefits = Object.keys(response.benefits).map(k => {
        let img = `assets/benefits/${response.benefits[k].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.png`;
        return {id: +k, name: response.benefits[k], img};
      });
    }
    console.log(this.benefits);
    this.isLoading = false;
  }

}
