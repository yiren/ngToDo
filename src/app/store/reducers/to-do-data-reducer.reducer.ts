import * as fromTodoActions from '../actions/to-do-data-actions.actions';

import { Action } from '@ngrx/store';

export interface ToDoDataState {
  todos: ToDoItem[];
  selectedToDoItem: ToDoItem;
}

export const initialState: ToDoDataState = {
  todos: [],
  selectedToDoItem: null
};

export function reducer(state = initialState, action: fromTodoActions.ToDoActionsActions): ToDoDataState {
  switch (action.type) {

    default:
      return state;
  }
}
