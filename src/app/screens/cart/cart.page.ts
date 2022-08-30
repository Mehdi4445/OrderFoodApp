import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  id: number;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    console.log(this.foodService.getFood(this.id));
  }

}
