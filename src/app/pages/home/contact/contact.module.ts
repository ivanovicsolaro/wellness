import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { ContactFormModalModule } from './modals/contact-form-modal/contact-form-modal.module';
import { OutsideArgentinaModalModule } from './modals/outside-argentina-modal/outside-argentina-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    ContactFormModalModule,
    OutsideArgentinaModalModule
  ],
  declarations: [ContactPage]
})

export class ContactPageModule {}
