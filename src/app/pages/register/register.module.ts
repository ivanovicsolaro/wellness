import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { IonItemErrorModule } from 'src/app/components/ion-item-error/ion-item-error.module';
import { TermsConditionsModalModule } from './modals/terms-conditions-modal/terms-conditions-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    IonItemErrorModule,
    TermsConditionsModalModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
