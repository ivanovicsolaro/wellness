import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenefitsPage } from './benefits.page';

const routes: Routes = [
  {
    path: '',
    component: BenefitsPage
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./benefit-detail/benefit-detail.module').then( m => m.BenefitDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BenefitsPageRoutingModule {}
