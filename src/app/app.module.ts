import {RouterModule, Routes} from '@angular/router'
import { metaReducers, reducers } from './store';

import { AddtodoComponent } from './addtodo/addtodo.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { KendoUISharedModule } from './shared/module/kendoUISharedModule';
import { MaterialUISharedModule } from './shared/module/materialUISharedModule';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodolistComponent } from './todolist/todolist.component';
import { environment } from '../environments/environment';

const routes:Routes=[
  {'path':'', component:TodolistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AddtodoComponent,
    TodoitemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    MaterialUISharedModule,
    KendoUISharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
