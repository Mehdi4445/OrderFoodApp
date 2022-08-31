import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CartItemComponent } from './Cart-item.component';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [CartItemComponent],
    declarations: [CartItemComponent],
    providers: [],
})
export class CartItemModule { }
