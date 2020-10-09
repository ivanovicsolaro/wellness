import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourcesPage } from './resources.page';

const routes: Routes = [
  {
    path: '',
    component: ResourcesPage
  },
  {
    path: 'list/:topicId',
    loadChildren: () => import('./resources-list/resources-list.module').then( m => m.ResourcesListPageModule)
  },
  {
    path: 'detail/:resourceId',
    loadChildren: () => import('./resource-detail/resource-detail.module').then( m => m.ResourceDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesPageRoutingModule {}
