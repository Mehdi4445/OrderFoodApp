import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItem$: Observable<CartItem[]>;
  totalAmount$: Observable<number>;
  ingri: any;

  constructor(private cartService: CartService, private alertCtrl: AlertController) {
   }

  ngOnInit() {
    this.cartItem$ = this.cartService.getCart();
    this.totalAmount$ = this.cartService.getTotalAmount();

  }

  onIncrease(item: CartItem){
    this.cartService.changeQty(1, item.id);
  }

  onDecrease(item: CartItem){
    if (item.quantity === 1) {this.removeFromCart(item);}
    else {this.cartService.changeQty(-1, item.id);}

  }

  async removeFromCart(item: CartItem){
    const alert = this.alertCtrl.create({
      header: 'Remove',
      message: 'Remove order ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => this.cartService.removeItem(item.id),
        },
        {
          text: 'No',
        },
      ],
    });

    (await alert).present();
  }


}
