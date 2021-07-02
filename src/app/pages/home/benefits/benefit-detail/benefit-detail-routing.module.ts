import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenefitDetailPage } from './benefit-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BenefitDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenefitDetailPageRoutingModule {}
