import * as fromApp from '../store/index';
import * as fromToDoActions from '../store/actions/to-do-data-actions.actions';
import * as fromToDoReducer from '../store/reducers/to-do-data-reducer.reducer';

import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { filter, map, mergeMap, share, switchMap, tap } from 'rxjs/operators';

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
  taskCount:number;
  isCompleted:boolean=false;
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
          this.isCompleted=false;
          return todos;
        }
        this.isCompleted=queryParams ? true : false;
        return todos.filter((todo)=>todo.isCompleted==this.isCompleted)
      }
    ).pipe(
      tap(todos=>{
        todos=todos.filter((todo)=>todo.isCompleted==this.isCompleted)
        this.taskCount=todos.length;
      })
    );
    //.subscribe(data=>console.log('filtered',data))

  }
  getCountBlockText(){
    if(this.isCompleted){
      return `${this.taskCount} task(s) completeds`;
    }
    return `${this.taskCount} task(s) left`;
  }
  prioritizedAction(payload:{isPrioritized:boolean,todoId:number}){
    //console.log(payload);
    if(payload.isPrioritized){
      this.store.dispatch(new fromToDoActions.MarkPrioritizedToDoAction({todoId:payload.todoId}));
    }
    if(!payload.isPrioritized){
      this.store.dispatch(new fromToDoActions.CancelPrioritizedToDoAction({todoId:payload.todoId}));
    }
  }

  completeAction(payload:{isCompleted:boolean,todoId:number}){
    //console.log(payload)
    if(payload.isCompleted){
      this.store.dispatch(new fromToDoActions.MarkToDoCompletedAction({todoId:payload.todoId}));
    }
    if(!payload.isCompleted){
      this.store.dispatch(new fromToDoActions.CancelToDoCompletedAction({todoId:payload.todoId}));
    }
  }
  updateToDoAction(payload:ToDoItem){
    this.store.dispatch(new fromToDoActions.UpdateToDoAction(payload));
  }
}
