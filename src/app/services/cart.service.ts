import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { map } from 'rxjs/operators';
import { Ingridient } from '../models/ingridient.model';
import { Food } from '../models/food.model';

@Injectable({providedIn: 'root'})
export class CartService {
    private items$ = new BehaviorSubject<CartItem[]>([]);
    private food = new BehaviorSubject<Food[]>([]);

    getCart(){
        return this.items$.asObservable();
    }

    addToCart(newItem: CartItem){
        this.items$.next([ ... this.items$.getValue(), newItem]);
    }
    removeItem(notes: string) {
        this.items$.next(this.items$.getValue().filter((item) => item.notes !== notes));

    }

    changeQty(quantity: number, id: number){
        const items = this.items$.getValue();
        const index = items.findIndex((item) => item.id === id);
        items[index].quantity += quantity;
        this.items$.next(items);
    }

    getTotalAmount() {
        return this.items$.pipe(map((items) => {
            let total = 0;
            items.forEach((item, index) => {
                // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                item.content.forEach(function(childrenEntry) {
                    total += (childrenEntry.qty * childrenEntry.price) * item.quantity;
                    });
                    });
                return total;
            })
        );
    }
}
