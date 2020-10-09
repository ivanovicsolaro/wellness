import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})

export class LinkComponent implements OnInit {

  @Input() resource : any;

  constructor() { }

  ngOnInit() {
    console.log(this.resource);
  }

}
