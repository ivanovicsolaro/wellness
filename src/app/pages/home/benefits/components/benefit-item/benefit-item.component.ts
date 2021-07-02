import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-benefit-item',
  templateUrl: './benefit-item.component.html',
  styleUrls: ['./benefit-item.component.scss'],
})

export class BenefitItemComponent implements OnInit {

  @Input() benefit: any;
  @Input() index: any;
  @Output() emitBenefit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  /**
   * Send benefit to parent
   * @param benefit 
   */
  sendBenefit(benefit: any) {
    this.emitBenefit.emit(benefit);
  }

}
