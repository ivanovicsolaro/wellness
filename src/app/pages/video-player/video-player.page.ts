import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
})

export class VideoPlayerPage implements OnInit {

  isLoading: boolean = true;
  videoId: number;
  videoUrl: any;
  height: number;
  width: number;
  defaultHref: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private platform: Platform,
              private domSanitizer: DomSanitizer,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      if(!Object.hasOwnProperty.call(params,'type')) {
        this.navCtrl.setDirection('root');
        this.router.navigate(['/tablinks/main']);
        return;
      }
      this.videoId = params.videoId;
      this.defaultHref = this.setDefaultHref({...params});
      // console.log(this.defaultHref);
      this.loadData();
    });
  }

  /**
   * Cargar data to load video
   */
  loadData() {
    this.isLoading = true;
    this.videoUrl = this.sanitizeVideoUrl(`https://player.vimeo.com/video/${this.videoId}`);
    this.height = this.platform.height() * 0.9;
    this.width = this.platform.width();
    this.isLoading = false;
  }

  /**
   * Sanitize video url
   * @param url 
   */
  sanitizeVideoUrl(url: string) {
    const sanitizeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    return sanitizeUrl;
  }

  /**
   * Set url for back button
   * @param queryParams 
   */
  private setDefaultHref(queryParams: any = {}) {
    let defaultHref: string = 'tablinks/main';
    switch(queryParams.type) {
      case 'benefits':
        defaultHref = `tablinks/benefits/detail/${queryParams.benefitId}`;
        break;
      case 'main':
        defaultHref = `tablinks/main`;
        break;
      default:
        break;
    }
    return defaultHref;
  }
}
