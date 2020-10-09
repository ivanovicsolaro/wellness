import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefit-item',
  templateUrl: './benefit-item.component.html',
  styleUrls: ['./benefit-item.component.scss'],
})

export class BenefitItemComponent implements OnInit {

  @Input() benefit: any;
  @Input() index: any;

  constructor() { }

  ngOnInit() {}

}
