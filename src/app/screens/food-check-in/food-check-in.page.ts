import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-food-check-in',
  templateUrl: './food-check-in.page.html',
  styleUrls: ['./food-check-in.page.scss'],
})
export class FoodCheckInPage implements OnInit {
  categories: Category[] = [];

  constructor() { }

  ngOnInit() {
    this.getCategories();
    console.log(this.categories);
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'mlawi',
        image: 'assets/images/foods/fried.png',
        active: true,
      },

      {
        id: 2,
        label: 'mlawi2',
        image: 'assets/images/foods/fried.png',
        active: true,
      },

      {
        id: 3,
        label: 'mlawi3',
        image: 'assets/images/foods/fried.png',
        active: true,
      },

      {
        id: 4,
        label: 'mlawi4',
        image: 'assets/images/foods/fried.png',
        active: true,
      }
    ];
  }

}
