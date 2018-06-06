import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { NgModule } from '@angular/core';
import { UploadModule } from '@progress/kendo-angular-upload';

@NgModule({
  imports: [
    DateInputsModule,
    InputsModule,
    UploadModule
  ],
  exports: [
    DateInputsModule,
    InputsModule,
    UploadModule
  ]
})
export class KendoUISharedModule { }
