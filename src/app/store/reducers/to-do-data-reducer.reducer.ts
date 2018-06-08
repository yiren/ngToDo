import * as _ from 'lodash';
import * as fromApp from '../index';
import * as fromTodoActions from '../actions/to-do-data-actions.actions';

import { Action, createSelector } from '@ngrx/store';
import { todoEntitiesSeedData, todoSeedData } from './../../shared/data';

import { ToDoItem } from './../../shared/model/ToDoItem';

export interface ToDoState {
  entities:{ [id:number]: ToDoItem};
  sortedToDoItems:ToDoItem[];
  selectedToDoItem: ToDoItem;
}

export const initialState: ToDoState = {
  entities: todoEntitiesSeedData,
  sortedToDoItems:todoSeedData,
  selectedToDoItem: null
};
export const getSortedToDoItems =(state:ToDoState)=>state.sortedToDoItems;
export const selectToDoState = (state:fromApp.AppState)=>state.todos;
export const getToDoEntities = (state: ToDoState) => state.entities;
export const selectToDoEntities = createSelector(
  selectToDoState,
  getToDoEntities
);
export const SelectSortedToDoItems=createSelector(
  selectToDoState,
  getSortedToDoItems
)

export const selectAllToDos = createSelector(
  selectToDoEntities,
  (entities:{[id:number]:ToDoItem}) => _.keys(entities).map(id => entities[parseInt(id,10)])
)


function sortToDoItems(allTodos:ToDoItem[]){
    
    allTodos = _.sortBy(allTodos, (todo: ToDoItem) => {
      return todo.modifiedAt;
    });

    allTodos = _.sortBy(allTodos, (todo: ToDoItem) => {
      return todo.isPrioritized;
    }).reverse();
    
    return allTodos;
}


export function toDoReducer(state = initialState, action: fromTodoActions.ToDoActionsActions): ToDoState {
  switch (action.type) {

    case (fromTodoActions.ToDoTypes.LoadToDosSuccessAction):{
      const todos = action.payload;
      const newEntities = todos.reduce(
        (entities: {[id: number]: ToDoItem}, todo: ToDoItem) => {
        return {
          ...entities,
          [todo.todoId]: todo
        };
      },{});

      return {
        ...state,
        entities: newEntities
      };
    }
    case (fromTodoActions.ToDoTypes.AddToDoAction):{
      const todo = action.payload;
      const entities = _.cloneDeep(state.entities);

      const newToDoItem:ToDoItem = {
        todoId: (Object.keys(entities).length + 1),
        taskName: todo.taskName,
        estimateDate: todo.estimateDate,
        estimateTime: todo.estimateTime,
        comment: todo.comment,
        isCompleted: false,
        modifiedAt:  new Date(),
        isPrioritized: todo.isPrioritized,
        itemFile: {
          fileName: todo.itemFile.fileName,
          uploadedDate: new Date(),
        }
      };

      entities[newToDoItem.todoId] = newToDoItem;
      //console.log('new todo impl', newToDoItem);
      return {
        ...state,
        entities
      };
    }

    case (fromTodoActions.ToDoTypes.UpdateToDoAction):{
      const updateTodo=action.payload;
      const entities=_.cloneDeep(state.entities);

      entities[updateTodo.todoId] = updateTodo;

      return {
        ...state,
        entities
      };
    }

    case (fromTodoActions.ToDoTypes.MarkToDoPrioritizedAction):{
      const entities = _.cloneDeep(state.entities);

      entities[action.payload.todoId].isPrioritized = true;
      entities[action.payload.todoId].modifiedAt = new Date();
      return {
        ...state,
        entities
      };
    }

    case (fromTodoActions.ToDoTypes.CancelToDoPrioritizedAction):{
      const entities = _.cloneDeep(state.entities);

      entities[action.payload.todoId].isPrioritized = false;
      entities[action.payload.todoId].modifiedAt = new Date();
      return {
        ...state,
        entities
      };
    }

    case (fromTodoActions.ToDoTypes.MarkToDoCompletedAction):{
      const entities = _.cloneDeep(state.entities);

      entities[action.payload.todoId].isCompleted = true;
      entities[action.payload.todoId].modifiedAt = new Date();
      return {
        ...state,
        entities
      };
    }

    case (fromTodoActions.ToDoTypes.CancelToDoCompletedAction):{
      const entities = _.cloneDeep(state.entities);

      entities[action.payload.todoId].isCompleted = false;
      entities[action.payload.todoId].modifiedAt = new Date();
      return {
        ...state,
        entities
      };
    }

    default:{
      const sortedToDoItems = sortToDoItems(_.cloneDeep(state.sortedToDoItems));
      
      return {
        ...state,
        sortedToDoItems
      };
    }
  }
}
