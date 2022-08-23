import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'food-check-in',
        loadChildren: () => import('../screens/food-check-in/food-check-in.module').then( m => m.FoodCheckInPageModule),
      },
      {
        path: 'cart',
        loadChildren: () => import('../screens/cart/cart.module').then( m => m.CartPageModule),
      },
      {
        path:'',
        redirectTo: 'food-check-in',
        pathMatch:'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
