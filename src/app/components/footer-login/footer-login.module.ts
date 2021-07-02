import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterLoginComponent } from './footer-login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterLoginComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FooterLoginComponent]
})

export class FooterLoginModule { }
