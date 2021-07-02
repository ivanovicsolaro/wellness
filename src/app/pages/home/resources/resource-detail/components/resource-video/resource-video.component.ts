import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-resource-video',
  templateUrl: './resource-video.component.html',
  styleUrls: ['./resource-video.component.scss'],
})
export class ResourceVideoComponent implements OnInit {

  @Input() resource: any = {};
  
  constructor(private domSanitizer: DomSanitizer) { 
  }

  ngOnInit() {
    console.log(this.resource);
  }

  sanitizeHtml() {
    try {
      // throw "myException";
      return this.domSanitizer.bypassSecurityTrustHtml(this.resource.resource_video.link);
    } catch(e) {
      return `<ion-text color="danger">Error con el iframe.</ion-text>`;
    }
  }

}
