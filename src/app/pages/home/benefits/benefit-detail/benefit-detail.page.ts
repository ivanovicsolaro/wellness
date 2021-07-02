import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-benefit-detail',
  templateUrl: './benefit-detail.page.html',
  styleUrls: ['./benefit-detail.page.scss'],
})

export class BenefitDetailPage implements OnInit {

  benefitId: number;
  benefit: any = {};
  benefits: any = [
    {
      name: 'Financiero',
      fullName: 'Área Financiero Contable',
      description: 'Contadores locales brindan orientación telefónica',
      image: 'financiero.jpg',
      // videoId: "354015683"
      videoId: "472346801"
    },
    {
      name: 'Legal',
      fullName: 'Área Legal',
      description: 'Abogados locales brindan orientación telefónica',
      image: 'legal.jpg',
      videoId: "472346667"
      // videoId: "354015729"
    },
    {
      name: 'Psicológico',
      fullName: 'Área Psicologico',
      description: 'Psicólogos especializados en procesos breves brindan orientación psicológica',
      image: 'psicologico.jpg',
      videoId: "472346176"
      // videoId: "354015843"
    },
    {
      name: 'Maternidad',
      fullName: 'Área Maternidad y lactancia',
      description: 'Especialistas en lactancia y crianza brindan orientación personalizada',
      image: 'maternidad.jpg',
      videoId: "472346513"
      // videoId: "354015769"
    },
    {
      name: 'Nutricional',
      fullName: 'Área Nutricional',
      description: 'Nutricionistas brindan orientación y planes personalizado',
      image: 'nutricional.jpg',
      videoId: "472346255"
      // videoId: "354015803"
    }
  ];
  icons: any = [
    {
      imageName: 'nutricional',
      label: 'Nutricional',
      name: 'Nutricional',
      selected: false
    },
    {
      imageName: 'maternidad',
      label: 'Maternidad',
      name: 'Maternidad',
      selected: false
    },
    {
      imageName: 'psicologico',
      label: 'Psicológica',
      name: 'Psicológico',
      selected: false
    },
    {
      imageName: 'legal',
      label: 'Legal',
      name: 'Legal',
      selected: false
    },
    {
      imageName: 'financiero',
      label: 'Financiero Contable',
      name: 'Financiero',
      selected: false
    },
  ];
  iconsFiltered: any = [];
  imageUrl: string = 'assets/benefits/big/';
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private apiSrv: ApiService,
              private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe(async (paramMap) => {
      if (!paramMap.has('id')) {
        this.navCtrl.setDirection('root');
        this.router.navigate(['/tablinks/benefits']);
        return;
      }
      this.benefitId = +paramMap.get('id');
      await this.loadData();
    });
  }

  /**
   * Load benefits detail data
   */
  async loadData() {
    // this.globalSrv.showLoading();
    this.isLoading = true;
    this.benefit = {};
    this.iconsFiltered = [];
    let benefit;
    try {
      benefit = await this.apiSrv.getBenefit(this.benefitId).toPromise();
    } catch(e) {
      console.error(e);
      benefit = null;
    }

    let response;
    try {
      response = await this.apiSrv.getCompanyList().toPromise();
    } catch(e) {
      response = null;
    }

    if (response && Object.hasOwnProperty.call(response, 'company') && Object.hasOwnProperty.call(response.company, 'benefits')) {
      this.icons = this.icons.map(icon => {
        let found = response.company.benefits.find(b => b.name === icon.name);
        if (found) {
          icon['id'] = found.id;
        }
        return icon;
      });
      this.iconsFiltered = this.icons.filter(icon => {
        return response.company.benefits.find(b => b.name === icon.name) ? true : false;
      });
    }

    if (benefit) {
      let found = this.benefits.find(b => b.name === benefit.name);
      let icon = this.icons.find(b => b.name === benefit.name);
      if (icon) {
        icon.selected = true;
      }
      if (found) {
        benefit = {id: benefit.id,...found};
        benefit['image'] = `${this.imageUrl}${found.image}`;
      }
      this.benefit = {...benefit};
    }
    this.isLoading = false;
  }

  /**
   * Go to video
   * @param benefit 
   */
  goToVideo(benefit) {
    const queryParams = {
      type: 'benefits',
      benefitId: benefit.id,
      videoId: benefit.videoId,
    };
    this.router.navigate(['/video'], {queryParams});
  }

  goToSection(icon) {
    if (!icon.selected) {
      this.navCtrl.setDirection('root');
      this.router.navigate(['/tablinks/benefits/detail/', icon.id]);
    }
  }

  /**
   * Generate image icon url
   * @param icon 
   */
  generateIconImageUrl(icon) {
    let activado = icon.selected ? 'activado' : 'desactivado';
    let fileName = `${icon.imageName}-${activado}.png`;
    return `assets/benefits/icons/${fileName}`;
  }

}
