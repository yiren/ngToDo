import * as generalDateTimeFormat from '../shared/config/datetimeFormat';

import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { ToDoItem } from '../shared/model/ToDoItem';
import { UpdateToDoAction } from './../store/actions/to-do-data-actions.actions';

@Component({
  selector: 'f2e-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {

  @Input()
  todoItem:ToDoItem;

  // @Input()
   isEdit:boolean;

  // @Input()
   //isPrioritized=false;

  // @Input()
   //isComplete:boolean;

  // @Input()
  // hasFile:boolean;

  // @Input()
  // hasComment:boolean;

  // @Input()
  // deadline:{hasDeadline:boolean, date:string}
  // @Input()
  // text:string;

  @ViewChild('fileInput')
  fileInputEl:ElementRef;
  constructor(
    private fb:FormBuilder,
    private store:Store<AppState>
  ) { }

  todoEditForm:FormGroup;
  dateFormat = generalDateTimeFormat.generalDateFormat;
  timeFormat = generalDateTimeFormat.generalTimeFormat;

  datePlaceHolderFormat = generalDateTimeFormat.generalDatePlaceHolderFormat;
  timePlaceHolderFormat = generalDateTimeFormat.generalTimePlaceHolderFormat;


  ngOnInit() {
    this.todoEditForm = this.fb.group({
      'taskName':[''],
      'estimateDate':[null],
      'estimateTime':[null],
      'comment':[{value:'', disabled:true}],
      'itemFile':[null],
      'isPrioritized':[false],
      'isCompleted':[false],
      'todoId': [undefined],
      'modifiedAt':[null],
    });
  }
  enableTextAreaEdit(){

  }
  getFile() {
    this.fileInputEl.nativeElement.click();
  }

  togglePrioritize(){
    this.isPrioritized=!this.isPrioritized;
  }

  toggleEdit(){
    this.isEdit=!this.isEdit;
  }
  cancel(){
    this.isEdit=false;
    this.todoEditForm.reset()
  }
  save(){
    if(this.fileInputEl.nativeElement.files.length != 0){
      console.log(this.fileInputEl.nativeElement.files[0].name);

      this.todoEditForm.controls['itemFile'].setValue({
        fileName:this.fileInputEl.nativeElement.files[0].name
        });
    }
    this.todoEditForm.controls['isPrioritized'].setValue(this.isPrioritized);
    console.log(this.todoEditForm.value);
    this.store.dispatch(new UpdateToDoAction(this.todoEditForm.value));
  }


}
