import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormModalComponent } from './contact-form-modal.component';
import { IonItemErrorModule } from 'src/app/components/ion-item-error/ion-item-error.module';

@NgModule({
  declarations: [ContactFormModalComponent],
  entryComponents: [ContactFormModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    IonItemErrorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ContactFormModalModule { }
