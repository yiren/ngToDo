import { BehaviorSubject, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'f2e-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  
  isPrioritized=false;
  isEdit=false;
  todoForm:FormGroup;
  
  ngOnInit() {
  }

  enableEdit(){
    this.isEdit=true;
  }
  hideEdit(){
    this.isEdit=false;
  }

  togglePrioritize(){
    this.isPrioritized = !this.isPrioritized;
  }
  cancel(){
    this.isEdit=false;
  }

}
