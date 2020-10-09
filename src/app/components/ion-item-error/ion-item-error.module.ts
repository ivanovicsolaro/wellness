import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonItemErrorComponent } from './ion-item-error.component';

@NgModule({
  declarations: [IonItemErrorComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[IonItemErrorComponent]
})

export class IonItemErrorModule { }
