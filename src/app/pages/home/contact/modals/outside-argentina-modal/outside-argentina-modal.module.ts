import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutsideArgentinaModalComponent } from './outside-argentina-modal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OutsideArgentinaModalComponent],
  entryComponents: [OutsideArgentinaModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class OutsideArgentinaModalModule { }
