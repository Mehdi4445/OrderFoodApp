import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodCheckInPage } from './food-check-in.page';

const routes: Routes = [
  {
    path: '',
    component: FoodCheckInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodCheckInPageRoutingModule {}
