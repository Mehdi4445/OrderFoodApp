import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { Ingridient } from 'src/app/models/ingridient.model';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  @Input() ingri: Ingridient;
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();

  id: number;
  food: Food;
  q: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private toastCtrl: ToastController
    ) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.food = this.foodService.getFood(this.id);
    this.q = this.food.quantity;
  }

  increaseQty(index: any, qty: number){
    const cont = this.food.content;
    index.qty += qty;
  }

  decreaseQty(index: any, qty: number){
    const cont = this.food.content;
    index.qty += qty;
  }

  increaseQ(q: number){
   this.food.quantity += q;

  }

  decreaseQ(q: number){
    this.food.quantity -= q;

   }

  addItemToCart(){
    const cartitem: CartItem = {
      id: this.food.id,
      title: this.food.title,
      price: this.food.price,
      image: this.food.image,
      quantity: this.food.quantity,
      content: this.food.content,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'order added',
      mode: 'ios',
      duration: 500,
      position: 'top',
    });
    toast.present();
  }

}
