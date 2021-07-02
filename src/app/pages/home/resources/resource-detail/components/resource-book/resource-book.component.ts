import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../../../../environments/environment';
@Component({
  selector: 'app-resource-book',
  templateUrl: './resource-book.component.html',
  styleUrls: ['./resource-book.component.scss'],
})
export class ResourceBookComponent implements OnInit {

  @Input() resource: any = {};
  
  constructor() { }

  ngOnInit() {
  }

  generateBookUrlImage() {
    const imageUrl = `${environment.apiUrl}${this.resource.resource_book.image}`;
    return imageUrl;
  }

}
