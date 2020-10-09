import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})

export class VideoPage implements OnInit {

  videoUrl: any;
  width: number = 0;
  height: number = 0;
  videoId: any;
  isLoading: boolean = true;

  constructor(private domSanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private navCtrl: NavController,
              private router: Router,
              private platform: Platform) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log('load');
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('videoId')) {
        this.navCtrl.setDirection('root');
        this.router.navigate(['/tablinks/main']);
        return;
      }
      this.videoId = +paramMap.get('videoId');
      this.loadData();
    });
  }

  loadData() {
    this.isLoading = true;
    this.videoUrl = this.sanitizeVideoUrl(`https://player.vimeo.com/video/${this.videoId}`);
    this.height = this.platform.height() * 0.9;
    this.width = this.platform.width();
    this.isLoading = false;
  }

  sanitizeVideoUrl(url : string) {
    const sanitizeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    return sanitizeUrl;
  }

}
