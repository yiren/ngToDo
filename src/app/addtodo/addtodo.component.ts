import * as fromApp from '../store';
import * as generalDateTimeFormat from '../shared/config/datetimeFormat';
import * as moment from 'moment';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AddToDoAction } from '../store/actions/to-do-data-actions.actions';
import { ItemFile } from './../shared/model/ItemFile';
import { Store } from '@ngrx/store';
import { ToDoItem } from './../shared/model/ToDoItem';

@Component({
  selector: 'f2e-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {
  @ViewChild('fileInput')
  fileInputEl:ElementRef;
  constructor(private fb:FormBuilder,
              private store:Store<fromApp.AppState>) { }

  dateFormat = generalDateTimeFormat.generalDateFormat;
  timeFormat = generalDateTimeFormat.generalTimeFormat;

  datePlaceHolderFormat = generalDateTimeFormat.generalDatePlaceHolderFormat;
  timePlaceHolderFormat = generalDateTimeFormat.generalTimePlaceHolderFormat;

  isPrioritized = false;
  isEdit = true;

  todoForm: FormGroup;

  todoRecord: ToDoItem;
  todofile: ItemFile;



  enableEdit() {
    this.isEdit = true;
  }

  hideEdit() {
    this.isEdit = false;
  }

  enableTextAreaEdit() {
    this.todoForm.controls['comment'].enable();
  }

  getFile() {
    this.fileInputEl.nativeElement.click();
  }

  togglePrioritize() {
    this.isPrioritized = !this.isPrioritized;
  }

  cancel() {
    this.todoForm.reset();
    this.isEdit = false;
  }
  ngOnInit() {
    this.todoForm = this.fb.group({
      'taskName':[''],
      'estimateDate':[null],
      'estimateTime':[null],
      'comment':[{value:'', disabled:true}],
      'itemFile':[null],
      'isPrioritized':[false]
    });
  }
  save() {
    if(this.fileInputEl.nativeElement.files.length!=0){
      console.log(this.fileInputEl.nativeElement.files[0].name);

      this.todoForm.controls['itemFile'].setValue({
        fileName:this.fileInputEl.nativeElement.files[0].name
        });
    }
    this.todoForm.controls['isPrioritized'].setValue(this.isPrioritized);
    console.log(this.todoForm.value);
    this.store.dispatch(new AddToDoAction(this.todoForm.value));
    //this.todoForm.reset();
  }
}
