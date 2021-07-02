import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourcesPageRoutingModule } from './resources-routing.module';

import { ResourcesPage } from './resources.page';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResourcesPageRoutingModule,
    PageTitleModule
  ],
  declarations: [ResourcesPage]
})
export class ResourcesPageModule {}
