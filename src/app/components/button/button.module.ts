import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './button.component';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [ButtonComponent],
    declarations: [ButtonComponent],
})
export class ButtonModule { }
