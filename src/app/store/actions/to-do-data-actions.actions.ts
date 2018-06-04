import { Action } from '@ngrx/store';

export enum ToDoDataTypes {
  LoadToDoActionss = '[ToDoData] Load ToDoActionss'
}

export class ToDosLoadActions implements Action {
  readonly type = ToDoDataTypes.LoadToDoActionss;
}

export type ToDoActionsActions = ToDosLoadActions;
