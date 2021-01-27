import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderPageComponent } from './order-page/order-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'soaps',
    component: OrderPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'diyas',
    component: OrderPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'garlics',
    component: OrderPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'peas',
    component: OrderPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'dairy',
    component: OrderPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
