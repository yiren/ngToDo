import * as _ from 'lodash';
import * as fromToDoActions from '../../app/store/actions/to-do-data-actions.actions';
import * as fromToDoReducer from '../../app/store/reducers/to-do-data-reducer.reducer';

import { ToDoItem } from '../../app/shared/model/ToDoItem';
import { initialState } from './../../app/store/reducers/to-do-data-reducer.reducer';
import { todoEntities } from './../../app/shared/data';
import { todoSeedData } from '../../app/shared/data';

describe('測試ToDo Reducer', () => {

  it('無匹配之Action', () => {
    const state = fromToDoReducer.toDoReducer(undefined, {} as any);

    expect(state).toEqual(initialState);
  });

  it('測試Load ToDo Reducer', () => {

    const action = new fromToDoActions.LoadToDosAction();
    const state = fromToDoReducer.toDoReducer(initialState, action);


    expect(state.entities).toEqual(todoEntities);

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
    const newToDoItem:ToDoItem={
      todoId: 4,
      taskName: '跑Unit Testing',
      estimateDate: '2018/06/05',
      estimateTime: '11:30',
      modifiedAt:new Date(),
      comment: '跑Unit Testing',
      isCompleted: false,
      isPrioritized: true,
      itemFile:null
    };
    const action = new fromToDoActions.AddToDoAction(newToDoItem);
    const state = fromToDoReducer.toDoReducer(initialState, action);

    const newEntities = {
      ...state.entities,
      [newToDoItem.todoId]: newToDoItem
    };

    expect(state.entities).toEqual(newEntities);
  });

  it('測試Update ToDo Reducer', () => {
    const updatedTodoItem: ToDoItem = {
      todoId: 1,
      taskName: '(更新)寫新增ToDo Action Test',
      estimateDate: '2018/06/04',
      estimateTime: '12:30',
      comment: '(更新)練習TDD',
      isCompleted: true,
      modifiedAt:new Date(2018,6,4),
      isPrioritized: true,
      itemFile:{
        fileId: 1,
        fileName: '20180528.zip',
        uploadedDate: '2018/06/05',
        filePath:'http://xxxx.xxxl.com/dsljio/'
      }
    };
    const action = new fromToDoActions.UpdateToDoAction(updatedTodoItem);

    const state = fromToDoReducer.toDoReducer(initialState, action);

    const newEntities = _.cloneDeep(state.entities)

    newEntities[updatedTodoItem.todoId]= updatedTodoItem;

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

    const sortedEntities = _.cloneDeep(todoEntities);

    let allTodos = _.values(sortedEntities);

    allTodos = _.sortBy(allTodos, (todo: ToDoItem) => {
      return todo.modifiedAt;
    });

    allTodos = _.sortBy(allTodos, (todo: ToDoItem) => {
      return todo.isPrioritized;
    }).reverse();

    console.log(allTodos);
    expect(state.entities).toEqual(todoEntities);

  });


});
