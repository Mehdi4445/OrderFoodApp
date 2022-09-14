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
                title: 'mlewi',
                price: 0.800,
                image: 'assets/images/foods/mlewi.png',
                quantity: 1,
                content: [
                    {id: 1, name :'pate', price : 0.800, image: 'assets/images/foods/war9a.png', qty: 1},
                    {id: 2, name :'fromage', price : 0.300, image: 'assets/images/foods/fromage.png', qty: 0},
                    {id: 3,name :'3tham', price : 0.500, image: 'assets/images/foods/3tham.png', qty: 0},
                    {id: 4,name :'mergez', price : 0.600, image: 'assets/images/foods/mergez.png', qty: 0},
                    {id: 5,name :'omellette', price : 0.600, image: 'assets/images/foods/ome.png', qty: 0},
                    {id: 6,name :'salami', price : 0.600, image: 'assets/images/foods/salami.png', qty: 0},
                    {id: 7,name :'frite', price : 0.600, image: 'assets/images/foods/fried.png', qty: 0},
                    {id: 8,name :'kwika', price : 0.600, image: 'assets/images/foods/kwika.png', qty: 0},
                    {id: 9,name :'thon', price : 1.200, image: 'assets/images/foods/thon.png', qty: 0},
                    {id: 10,name :'tajin', price : 1.200, image: 'assets/images/foods/tajin.png', qty: 0},
                    {id: 11,name :'escalope', price : 2.000, image: 'assets/images/foods/esc.png', qty: 0},
                    ]
            },
            {
                id: 2,
                title: 'Fricasse',
                price: 1.000,
                image: 'assets/images/foods/fricasser.png',
                quantity: 1,
                content: [
                    {name :'fricasse', price : 1.000, image: 'assets/images/foods/fricasser.png', qty: 1}
                    ]

            },
            {
                id: 3,
                title: 'keskrout kbir',
                price: 2.500,
                image: 'assets/images/foods/keskrout kbir.png',
                quantity: 1,
                content: [
                    {name :'keskrout kbir', price : 2.500, image: 'assets/images/foods/keskrout kbir.png', qty: 1},
                    {name :'escalope', price : 2.000, image: 'assets/images/foods/esc.png', qty: 0}
                    ]

            },
            {
                id: 4,
                title: 'keskrout 3adi',
                price: 2.000,
                image: 'assets/images/foods/keskrout.png',
                quantity: 1,
                content: [
                    {name :'keskrout 3adi', price : 2.000, image: 'assets/images/foods/keskrout.png', qty: 1},
                    {name :'escalope', price : 2.000, image: 'assets/images/foods/esc.png', qty: 0}
                    ]

            },
        ];
    }

    getFood(id: number): Food {
        return this.getFoods().find((food) => food.id === id);
    }
}
