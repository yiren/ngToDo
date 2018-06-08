import * as _ from 'lodash';
import * as fromToDoActions from '../../app/store/actions/to-do-data-actions.actions';
import * as fromToDoReducer from '../../app/store/reducers/to-do-data-reducer.reducer';

import { addToDoSeedData, todoEntitiesSeedData, updatedTodoItemSeedData } from './../../app/shared/data';

import { ToDoItem } from '../../app/shared/model/ToDoItem';
import { initialState } from './../../app/store/reducers/to-do-data-reducer.reducer';
import { todoSeedData } from '../../app/shared/data';

describe('測試ToDo Reducer', () => {

  it('無匹配之Action', () => {
    const state = fromToDoReducer.toDoReducer(undefined, {} as any);

    expect(state).toEqual(initialState);
  });

  it('測試Load ToDo Reducer', () => {

    const action = new fromToDoActions.LoadToDosAction();
    const state = fromToDoReducer.toDoReducer(initialState, action);


    expect(state.entities).toEqual(todoEntitiesSeedData);

  });
  it('測試Load ToDo Success Reducer', () => {

    const todosFromRemote = [todoSeedData[1], todoSeedData[2]];

    const action = new fromToDoActions.LoadToDosSuccessAction(todosFromRemote);
    const state = fromToDoReducer.toDoReducer(initialState, action);

    const newEntities = {
      2: todoSeedData[1],
      3: todoSeedData[2]
    };

    expect(state.entities).toEqual(newEntities);

  });

  it('測試Add ToDo Reducer', () => {
    const action = new fromToDoActions.AddToDoAction(addToDoSeedData);
    const state = fromToDoReducer.toDoReducer(initialState, action);

    const newToDoItem: ToDoItem = {
      todoId: (Object.keys(todoEntitiesSeedData).length + 1),
      taskName: addToDoSeedData.taskName,
      estimateDate: addToDoSeedData.estimateDate,
      estimateTime: addToDoSeedData.estimateTime,
      comment: addToDoSeedData.comment,
      isCompleted: false,
      modifiedAt: new Date(),
      isPrioritized: addToDoSeedData.isPrioritized,
      itemFile: {
        fileName: addToDoSeedData.itemFile.fileName,
        uploadedDate: new Date(),
      }
    };
    console.log('new todo spec', newToDoItem);
    const newEntities = {
      ...state.entities,
      [newToDoItem.todoId]: newToDoItem
    };

    expect(state.entities).toEqual(newEntities);
  });
  it('測試Update ToDo Reducer', () => {
      
      const action = new fromToDoActions.UpdateToDoAction(updatedTodoItemSeedData);
      
      const state = fromToDoReducer.toDoReducer(initialState, action);
      const newEntities = _.cloneDeep(state.entities)
      newEntities[updatedTodoItemSeedData.todoId]= updatedTodoItemSeedData;

      expect(state.entities).toEqual(newEntities);
  });
 
  it('測試Mark Prioritized ToDo Reducer', () => {
    const prioritizedTodo = {
      todoId: 3
    };
    const action = new fromToDoActions.MarkPrioritizedToDoAction(prioritizedTodo);
    const state = fromToDoReducer.toDoReducer(initialState, action);
    const newEntities = _.cloneDeep(state.entities);
    newEntities[prioritizedTodo.todoId].isPrioritized=true;
    newEntities[prioritizedTodo.todoId].modifiedAt = new Date();
    expect(state.entities).toEqual(newEntities);
  });

  it('測試Mark Completed ToDo Reducer', () => {
    const completedTodo = {
      todoId: 2
    };
    const action = new fromToDoActions.MarkToDoCompletedAction(completedTodo);
    const state = fromToDoReducer.toDoReducer(initialState, action);
    const newEntities = _.cloneDeep(state.entities);
    newEntities[completedTodo.todoId].isCompleted = true;
    newEntities[completedTodo.todoId].modifiedAt = new Date();
    expect(state.entities).toEqual(newEntities);
  });

  it('測試Sort ToDos Reducer', () => {

    const action = new fromToDoActions.SortToDosAction();
    const state = fromToDoReducer.toDoReducer(initialState, action);

    const sortedEntities = _.cloneDeep(todoEntitiesSeedData);

    let allTodos = _.values(sortedEntities);

    allTodos = _.sortBy(allTodos, (todo: ToDoItem) => {
      return todo.modifiedAt;
    });

    allTodos = _.sortBy(allTodos, (todo: ToDoItem) => {
      return todo.isPrioritized;
    }).reverse();

    console.log(allTodos);
    expect(state.entities).toEqual(todoEntitiesSeedData);

  });


});
