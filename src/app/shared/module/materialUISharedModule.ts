import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialUISharedModule { }
