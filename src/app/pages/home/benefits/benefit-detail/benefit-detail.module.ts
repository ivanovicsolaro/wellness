import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenefitDetailPageRoutingModule } from './benefit-detail-routing.module';

import { BenefitDetailPage } from './benefit-detail.page';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenefitDetailPageRoutingModule,
    PageTitleModule
  ],
  declarations: [BenefitDetailPage]
})
export class BenefitDetailPageModule {}
