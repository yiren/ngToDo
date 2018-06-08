import { Action } from '@ngrx/store';
import { ToDoFormData } from './../../shared/model/ToDoFormData';
import { ToDoItem } from '../../shared/model/ToDoItem';

export enum ToDoTypes {
  LoadToDosAction = '[ToDo] Load ToDos Action',
  LoadToDosSuccessAction = '[ToDo] Load ToDos Success Action',
  AddToDoAction= '[ToDo] Add ToDo Action',
  UpdateToDoAction = '[ToDo] Update ToDo Action',
  MarkToDoPrioritizedAction = '[ToDo] Mark Prioritized ToDo Action',
  CancelToDoPrioritizedAction = '[ToDo] Cancel Prioritized ToDo Action',
  MarkToDoCompletedAction = '[ToDo] Mark Completed ToDo Action',
  CancelToDoCompletedAction = '[ToDo] Cancel Completed ToDo Action',
  SortToDosAction = '[ToDo] Sort ToDos Action'
}

export class LoadToDosAction implements Action {
  readonly type = ToDoTypes.LoadToDosAction;
}

export class LoadToDosSuccessAction implements Action {
  readonly type = ToDoTypes.LoadToDosSuccessAction;
  constructor(public payload:ToDoItem[]){}
}

export class SortToDosAction implements Action {
  readonly type = ToDoTypes.SortToDosAction;
}

export class AddToDoAction implements Action {
  readonly type = ToDoTypes.AddToDoAction;
  constructor(public payload:ToDoFormData){}
}

export class UpdateToDoAction implements Action {
  readonly type = ToDoTypes.UpdateToDoAction;
  constructor(public payload:ToDoItem){}
}

export class MarkPrioritizedToDoAction implements Action {
  readonly type = ToDoTypes.MarkToDoPrioritizedAction;
  constructor(public payload:{todoId:number}){}
}
export class CancelPrioritizedToDoAction implements Action {
  readonly type = ToDoTypes.CancelToDoPrioritizedAction;
  constructor(public payload:{todoId:number}){}
}

export class MarkToDoCompletedAction implements Action {
  readonly type = ToDoTypes.MarkToDoCompletedAction;
  constructor(public payload:{todoId:number}){}
}
export class CancelToDoCompletedAction implements Action {
  readonly type = ToDoTypes.CancelToDoCompletedAction;
  constructor(public payload:{todoId:number}){}
}

export type ToDoActionsActions = LoadToDosAction |
CancelToDoCompletedAction |
CancelPrioritizedToDoAction |
LoadToDosSuccessAction |
SortToDosAction|
AddToDoAction |
UpdateToDoAction |
MarkPrioritizedToDoAction |
MarkToDoCompletedAction
;
