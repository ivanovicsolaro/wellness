import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenefitsPageRoutingModule } from './benefits-routing.module';

import { BenefitsPage } from './benefits.page';
import { BenefitItemModule } from './components/benefit-item/benefit-item.module';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenefitsPageRoutingModule,
    BenefitItemModule,
    PageTitleModule
  ],
  declarations: [BenefitsPage]
})
export class BenefitsPageModule {}
