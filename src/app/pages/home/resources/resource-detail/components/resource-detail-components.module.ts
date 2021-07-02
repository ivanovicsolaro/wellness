import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinkComponent } from './link/link.component';
import { ResourceVideoComponent } from './resource-video/resource-video.component';
import { ResourceBookComponent } from './resource-book/resource-book.component';

@NgModule({
  declarations: [LinkComponent,ResourceVideoComponent, ResourceBookComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [LinkComponent,ResourceVideoComponent, ResourceBookComponent]
})

export class ResourceDetailComponentsModule { }
