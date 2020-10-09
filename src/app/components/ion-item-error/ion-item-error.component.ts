import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-item-error',
  templateUrl: './ion-item-error.component.html',
  styleUrls: ['./ion-item-error.component.scss'],
})

export class IonItemErrorComponent implements OnInit {
  
  @Input() error: string;

  constructor() { }

  ngOnInit() {}

}
