import * as fromApp from './store/index';
import * as fromToDoActions from './store/actions/to-do-data-actions.actions';
import * as fromToDoReducer from './store/reducers/to-do-data-reducer.reducer';

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ToDoItem } from './shared/model/ToDoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>){}
  todoState$:Observable<ToDoItem[]>;

  ngOnInit(){
    this.store.dispatch(new fromToDoActions.LoadToDosAction());
    this.todoState$ = this.store.select(fromToDoReducer.selectAllToDos);
  }

}
