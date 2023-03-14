import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdsComponent } from './components/create-ads/create-ads.component';
import { HomeComponent } from './components/home/home.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { createAdsRoute, defaultRoute, homeRoute, itemDetailsRoute, itemListRoute, userRoute } from './constants';

const routes: Routes = [
  {
    path: defaultRoute,
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: homeRoute, component: HomeComponent,
    children: [
      {
        path: defaultRoute,
        redirectTo: itemListRoute,
        pathMatch: 'full',
      },
      { path: itemListRoute, component: ItemListComponent },
      {path: itemDetailsRoute, component: ViewItemComponent},
      {path: createAdsRoute , component: CreateAdsComponent},
      {path: userRoute,component: ItemListComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
