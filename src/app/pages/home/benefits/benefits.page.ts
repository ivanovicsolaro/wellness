import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.page.html',
  styleUrls: ['./benefits.page.scss'],
})
export class BenefitsPage implements OnInit {

  isLoading: boolean = true;
  benefits: any = [];

  constructor(private apiSrv: ApiService,
              private router: Router) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.loadData();
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
        const img = `assets/benefits/${response.benefits[k].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.png`;
        return {id: +k, name: response.benefits[k], img};
      }).filter(benefit => {
        const found = response.company.benefits.find(b => b.name === benefit.name);
        return found ? true : false;
      });
    }
    this.isLoading = false;
  }

  /**
   * Action to every benefir
   * @param benefit 
   */
  actionBenefit(benefit) {
    console.log(benefit);
    this.router.navigate(['/tablinks/benefits/detail',benefit.id]);
  }

}
