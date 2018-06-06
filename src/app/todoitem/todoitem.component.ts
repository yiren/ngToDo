import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'f2e-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
  
  @Input()
  isEdit:boolean;
  
  @Input()
  isPrioritized:boolean;

  @Input()
  isComplete:boolean;

  @Input()
  hasFile:boolean;

  @Input()
  hasComment:boolean;

  @Input()
  deadline:{hasDeadline:boolean, date:string}
  @Input()
  text:string;

  textAreaEditable = false;
  constructor() { }
  
  ngOnInit() {
  }
  enableTextAreaEdit(){
    this.textAreaEditable=true;
  }

  togglePrioritize(){
    this.isPrioritized=!this.isPrioritized;
  }

  toggleEdit(){
    this.isEdit=!this.isEdit;
  }
  cancel(){
    this.isEdit=false;
  }
  save(){
    
  }

  
}
