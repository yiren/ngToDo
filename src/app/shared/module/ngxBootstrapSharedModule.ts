import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgModule } from '@angular/core';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

@NgModule({
  imports: [
    TabsModule,
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    SortableModule.forRoot(),
    TimepickerModule
  ],
  exports: [
    TabsModule,
    BsDatepickerModule,
    AccordionModule,
    SortableModule,
    TimepickerModule

  ]
})
export class NgxBootstrapSharedModule { }
