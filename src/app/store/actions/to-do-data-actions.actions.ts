import { Action } from '@ngrx/store';
import { ToDoItem } from '../../shared/model/ToDoItem';

export enum ToDoTypes {
  LoadToDosAction = '[ToDo] Load ToDos Action',
  LoadToDosSuccessAction = '[ToDo] Load ToDos Success Action',
  AddToDoAction= '[ToDo] Add ToDo Action',
  UpdateToDoAction = '[ToDo] Update ToDo Action',
  MarkToDoPrioritizedAction = '[ToDo] Mark Prioritized ToDo Action',
  MarkToDoCompletedAction = '[ToDo] Mark Completed ToDo Action'
}

export class LoadToDosAction implements Action {
  readonly type = ToDoTypes.LoadToDosAction;
}

export class LoadToDosSuccessAction implements Action {
  readonly type = ToDoTypes.LoadToDosSuccessAction;
  constructor(public payload:ToDoItem[]){}
}

export class AddToDoAction implements Action {
  readonly type = ToDoTypes.AddToDoAction;
  constructor(public payload:ToDoItem){}
}

export class UpdateToDoAction implements Action {
  readonly type = ToDoTypes.UpdateToDoAction;
  constructor(public payload:ToDoItem){}
}

export class MarkPrioritizedToDoAction implements Action {
  readonly type = ToDoTypes.MarkToDoPrioritizedAction;
  constructor(public payload:{todoId:number}){}
}

export class MarkToDoCompletedAction implements Action {
  readonly type = ToDoTypes.MarkToDoCompletedAction;
  constructor(public payload:{todoId:number}){}
}

export type ToDoActionsActions = LoadToDosAction |
LoadToDosSuccessAction |
AddToDoAction |
UpdateToDoAction |
MarkPrioritizedToDoAction |
MarkToDoCompletedAction
;
