import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: HomePage,
    children: [
      {
        path: 'benefits',
        loadChildren: () => import('./benefits/benefits.module').then( m => m.BenefitsPageModule)
      },
      {
        path: 'resources',
        loadChildren: () => import('./resources/resources.module').then( m => m.ResourcesPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'main',
        loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
