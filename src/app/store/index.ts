import * as fromToDoData from './reducers/to-do-data-reducer.reducer';

import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { environment } from '../../environments/environment';

export interface AppState {
  todoData: fromToDoData.ToDoDataState;
  
}

export const reducers: ActionReducerMap<AppState> = {
  todoData: fromToDoData.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
