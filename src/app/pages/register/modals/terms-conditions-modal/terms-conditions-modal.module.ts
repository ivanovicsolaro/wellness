import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TermsConditionsModalComponent } from './terms-conditions-modal.component';

@NgModule({
  declarations: [TermsConditionsModalComponent],
  entryComponents: [TermsConditionsModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TermsConditionsModalModule { }
