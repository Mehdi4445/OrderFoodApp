import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Food } from '../models/food.model';
import data from '../data.json';

@Injectable({providedIn: 'root'})
export class FoodService {

    url=data;

   /* constructor(private http: HttpClient){}

    getFoods(): Observable<Food[]> {
        return this.http.get<Food[]>(this.url).pipe(catchError(this.errorhandler));
    }

    errorhandler(error: HttpErrorResponse){
        return throwError(error.message || 'server error');
    }*/

    getFoods(): Food[] {
        return [
            {
                id: 1,
                title: 'mlawi',
                price: 15,
                image: 'assets/images/foods/fried.png',
                quantity: 1,
                content: [
                    {id: 7, name :'frite', price : 1, image: 'assets/images/foods/chicken.png', qty: 1},
                    {id: 2,name :'bsal', price : 5, image: 'assets/images/foods/fried.png', qty: 1}
                    ]
            },
            {
                id: 2,
                title: 'malfUwUf',
                price: 5,
                image: 'assets/images/foods/chicken.png',
                quantity: 1,
                content: [
                    {name :'frite', price : 1, image: 'assets/images/foods/chicken.png', qty: 1},
                    {name :'bsal', price : 5, image: 'assets/images/foods/fried.png', qty: 1},
                    {name :'omellete', price : 4, image: 'assets/images/foods/chicken.png', qty: 1},
                    ]

            },
        ];
    }

    getFood(id: number): Food {
        return this.getFoods().find((food) => food.id === id);
    }
}
