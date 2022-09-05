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
  }

  increaseQty(index: any, qty: number){
    const cont = this.food.content;
    index.qty += qty;
  }

  decreaseQty(index: any, qty: number){
    const cont = this.food.content;
    index.qty += qty;
  }

  addItemToCart(){
    const cartitem: CartItem = {
      id: this.food.id,
      title: this.food.title,
      price: this.food.price,
      image: this.food.image,
      quantity: 1,
      content: this.food.content,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'order added',
      mode: 'ios',
      duration: 1000,
    position: 'top',
    });

    toast.present();
  }

}
