import * as generalDateTimeFormat from '../shared/config/datetimeFormat';
import * as moment from 'moment';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ItemFile } from './../shared/model/ItemFile';
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
              private zone:NgZone) { }

  dateFormat = generalDateTimeFormat.generalDateFormat;
  timeFormat = generalDateTimeFormat.generalTimeFormat;

  datePlaceHolderFormat = generalDateTimeFormat.generalDatePlaceHolderFormat;
  timePlaceHolderFormat = generalDateTimeFormat.generalTimePlaceHolderFormat;

  isPrioritized = false;
  isEdit = true;
  textAreaDisabled = true;
  todoForm: FormGroup;

  todoRecord: ToDoItem;
  todofile: ItemFile;

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
    this.isEdit = false;
  }
  save() {

    console.log(this.fileInputEl.nativeElement);
    console.log(this.todoForm.value);
  }
}
