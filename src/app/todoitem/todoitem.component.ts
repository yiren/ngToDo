import * as generalDateTimeFormat from '../shared/config/datetimeFormat';
import * as moment from 'moment';

import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ItemFile } from './../shared/model/ItemFile';
import { ToDoItem } from '../shared/model/ToDoItem';

@Component({
  selector: 'f2e-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {

  @Input()
  todoItem:ToDoItem;

  // @Input()
   isEdit=false;

  // @Input()
   isPrioritized=false;

  // @Input()
   isComplete:boolean;

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

  @Output()
  completeAction=new EventEmitter<{isCompleted:boolean,todoId:number}>();

  @Output()
  prioritizedAction=new EventEmitter<{isPrioritized:boolean,todoId:number}>();
  
  @Output()
  updateToDoAction=new EventEmitter<ToDoItem>();

  newUploadFile:ItemFile=null;
  

  todoEditForm:FormGroup;
  dateFormat = generalDateTimeFormat.generalDateFormat;
  timeFormat = generalDateTimeFormat.generalTimeFormat;

  datePlaceHolderFormat = generalDateTimeFormat.generalDatePlaceHolderFormat;
  timePlaceHolderFormat = generalDateTimeFormat.generalTimePlaceHolderFormat;
  todoId:number;
  
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.todoEditForm = this.fb.group({
      'taskName':[this.todoItem.taskName],
      'estimateDate':[this.todoItem.estimateDate],
      'estimateTime':[this.todoItem.estimateTime],
      'comment':[{value:this.todoItem.comment, disabled:true}],
      'itemFile':[this.todoItem.itemFile],
      'isPrioritized':[this.todoItem.isPrioritized],
      'isCompleted':[this.todoItem.isCompleted],
      'todoId': [this.todoItem.todoId],
      'modifiedAt':[this.todoItem.modifiedAt]
    });
    this.todoId=this.todoEditForm.controls['todoId'].value;
    this.isPrioritized=this.todoItem.isPrioritized;
    this.isComplete=this.todoItem.isCompleted;
    this.todoEditForm.controls['isCompleted'].valueChanges.subscribe(completeState=>{
        this.completeAction.emit({isCompleted:completeState, todoId:this.todoId});    
    });
    this.todoEditForm.controls['isPrioritized'].valueChanges.subscribe(prioritizedState=>{
        this.prioritizedAction.emit({isPrioritized:prioritizedState, todoId:this.todoId});
    });
  }
  enableTextAreaEdit(){
    this.todoEditForm.controls['comment'].enable();
  }
  getFile() {
    this.fileInputEl.nativeElement.click();
  }

  togglePrioritize(){
    if(this.isEdit){
      this.isPrioritized = !this.isPrioritized;  
    }
    if(!this.isEdit){
      const isPrioritizedControl = this.todoEditForm.controls['isPrioritized'];

    isPrioritizedControl.setValue(!isPrioritizedControl.value);
    
    this.isPrioritized = !this.isPrioritized;
    }
    
    // if(this.isPrioritized){
    //   this.store.dispatch(new MarkPrioritizedToDoAction({todoId:this.todoId}));
    // }
  }

  displaySubTitleDate(){
    const estiDateControl = this.todoEditForm.controls['estimateDate'];

    return moment(estiDateControl.value).format('YYYY/MM/DD');
  }
  toggleEdit() {
    this.isEdit =! this.isEdit;
  }

  isToDoComplete(){
    const isCompletedControl = this.todoEditForm.controls['isCompleted'];
    return isCompletedControl.value;
  }
  getTaskName(){
    return this.todoEditForm.controls['taskName'].value;
  }
  getFileName(){
      if (!this.todoItem.itemFile) {
        this.newUploadFile={
          fileName:this.fileInputEl.nativeElement.files[0].name,
          uploadedDate:undefined
        };
        return this.newUploadFile.fileName;
      }
      return this.todoItem.itemFile.fileName;
  }
  cancel() {
    this.isEdit = false;
  }
  hasFile(){
    const inputFiles = this.fileInputEl.nativeElement.files;
    if(inputFiles.length != 0){
      this.todoItem.itemFile=null;
      return true;
    } else if(this.todoItem.itemFile) {
      return true;
    } else {
      return false;
    }
  }

  getDiffDays() {

    const today = moment();
    
    if (!this.todoItem.itemFile) {
      return 'after save this record';
    }
    const inputFiles = this.fileInputEl.nativeElement.files;
    const fileDate = moment(this.todoItem.itemFile.uploadedDate);
    return today.diff(fileDate, 'days') + ' days ago.';
  }

  

  save(){
    if(!this.newUploadFile){
      //console.log(this.fileInputEl.nativeElement.files[0].name);

      this.todoEditForm.controls['itemFile'].setValue(this.newUploadFile);
    }
    this.todoEditForm.controls['modifiedAt'].setValue(new Date());
    //console.log(this.todoEditForm.value);
    this.updateToDoAction.emit(this.todoEditForm.value);
    this.isEdit=false;
  }
  
}
