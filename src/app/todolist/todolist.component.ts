import * as fromApp from '../store/index';
import * as fromToDoActions from '../store/actions/to-do-data-actions.actions';
import * as fromToDoReducer from '../store/reducers/to-do-data-reducer.reducer';

import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import {filter, map, mergeMap, switchMap, tap} from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToDoItem } from '../shared/model/ToDoItem';

@Component({
  selector: 'f2e-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  constructor(
    private store: Store<fromApp.AppState>,
    private route:ActivatedRoute
  ){}
  todoState$:Observable<ToDoItem[]>;
  queryParam$:Observable<number>;
  filteredTodoState$:Observable<ToDoItem[]>
  ngOnInit() {
    this.store.dispatch(new fromToDoActions.LoadToDosAction());
    this.todoState$ = this.store.select(fromToDoReducer.selectAllToDos);
    // this.route.queryParamMap.pipe(
    //   map(params=>(parseInt(params.get('completed'),10)?true:false))
    // ).subscribe(isComplete=>{
    //   this.todoState$.pipe(
    //     map( todos =>{
    //       return todos.filter((todo)=>todo.isCompleted==isComplete);
    //     }
    //     )
    //   )
    //    }
    // );
    
    this.queryParam$=this.route.queryParamMap.pipe(
      map(params=>parseInt(params.get('completed'),10))
    );
    this.filteredTodoState$ =
    this.filteredTodoState$=combineLatest(this.todoState$, this.queryParam$,
      (todos, queryParams)=>{
        
        if(isNaN(queryParams)){ 
          //console.log(queryParams)  
          return todos;
        }
        console.log(queryParams)
        const isCompleted=queryParams ? true : false;
        return todos.filter((todo)=>todo.isCompleted==isCompleted)
      }
    )
    //.subscribe(data=>console.log('filtered',data))

  }

}
