import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({providedIn: 'root'})
export class FoodService {
    getFoods(): Food[] {
        return [
            {
                id: 1,
                title: 'mlawi',
                price: 15,
                image: 'assets/images/foods/fried.png'
            },
            {
                id: 2,
                title: 'malfUwUf',
                price: 5,
                image: 'assets/images/foods/chicken.png'
            },
            {
                id: 3,
                title: 'fricassé',
                price: 1,
                image: 'assets/images/foods/fried.png'
            },
            {
                id: 4,
                title: 'Ara Ara',
                price: 9999,
                image: 'assets/images/foods/fried.png'
            },
            {
                id: 5,
                title: 'djej',
                price: 9999,
                image: 'assets/images/foods/chicken.png'
            },
            {
                id: 6,
                title: 'Ara Ara2',
                price: 9999,
                image: 'assets/images/foods/fried.png'
            },
        ];
    }

    getFood(id: number): Food {
        return this.getFoods().find((food) => food.id = id);
    }
}
