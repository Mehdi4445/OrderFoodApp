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

  constructor(private cartService: CartService, private alertCtrl: AlertController) {
   }

  ngOnInit() {
    this.cartItem$ = this.cartService.getCart();

  }

  onIncrease(item: CartItem){}

  onDecrease(item: CartItem){}

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
