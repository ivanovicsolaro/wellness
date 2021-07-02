import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAccountPageRoutingModule } from './create-account-routing.module';

import { CreateAccountPage } from './create-account.page';
import { FooterLoginModule } from 'src/app/components/footer-login/footer-login.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateAccountPageRoutingModule,
    FooterLoginModule
  ],
  declarations: [CreateAccountPage]
})
export class CreateAccountPageModule {}
