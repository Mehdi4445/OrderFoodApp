import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-check-in',
  templateUrl: './food-check-in.page.html',
  styleUrls: ['./food-check-in.page.scss'],
})
export class FoodCheckInPage implements OnInit {
  categories: Category[] = [];
  foods: Food[] = [];
  err: '';

  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
    this.foods = this.foodService.getFoods();
    /*this.foodService.getFoods().subscribe(
      data => this.foods = data, error => this.err = error
    );*/
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'mlff',
        image: 'assets/images/foods/fried.png',
        active: true,
      },

      {
        id: 2,
        label: 'mlawi2',
        image: 'assets/images/foods/fried.png',
        active: false,
      },

      {
        id: 3,
        label: 'mlawi3',
        image: 'assets/images/foods/fried.png',
        active: false,
      },

      {
        id: 4,
        label: 'mlawi4',
        image: 'assets/images/foods/fried.png',
        active: false,
      }
    ];
  }

  goToDetailPage(id: number){
    this.router.navigate(['detail', id]);
  }

}
