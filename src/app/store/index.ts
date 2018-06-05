import * as fromToDoData from './reducers/to-do-data-reducer.reducer';

import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { ToDoState } from './reducers/to-do-data-reducer.reducer';
import { environment } from '../../environments/environment';

export interface AppState {
  todos: fromToDoData.ToDoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromToDoData.toDoReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

//export const selectToDoFeatureState = createFeatureSelector<ToDoFeatureState>('todos');
export const selectToDoState = (state:AppState)=>state.todos;
