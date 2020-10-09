import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tabs: any = [];

  constructor() { }

  ngOnInit() {
    this.tabs = [
      { route: 'benefits', label: 'Beneficios', icon: 'heart'},
      { route: 'resources', label: 'Recursos', icon: 'star'},
      { route: 'news', label: 'Novedades', icon: 'notifications'},
      { route: 'contact', label: 'Contacto', icon: 'mail'}
    ];
  }

}
