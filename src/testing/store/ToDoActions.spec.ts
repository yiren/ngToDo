import * as fromToDoActions from '../../app/store/actions/to-do-data-actions.actions';
import * as moment from 'moment';

import { addToDoSeedData, todoEntitiesSeedData, todoSeedData, updatedTodoItemSeedData } from './../../app/shared/data';

import { ToDoFormData } from '../../app/shared/model/ToDoFormData';
import { ToDoItem } from './../../app/shared/model/ToDoItem';

describe('測試ToDo Actions', ()=>{
  describe('載入Todo',()=>{
    it('載入Todo Action', ()=>{
      const action = new fromToDoActions.LoadToDosAction();

      expect({...action}).toEqual({
        type: fromToDoActions.ToDoTypes.LoadToDosAction
      });
    });
    it('完成載入Todo Action', ()=>{

      const data = todoSeedData;
      const action = new fromToDoActions.LoadToDosSuccessAction(data);

      expect({...action}).toEqual({
        type: fromToDoActions.ToDoTypes.LoadToDosSuccessAction,
        payload:data
      });
    });
  });

  describe('新增ToDo', () => {
    
      it('新增Todo Action', () => {
        const action = new fromToDoActions.AddToDoAction(addToDoSeedData);

        expect({...action}).toEqual({
          type: fromToDoActions.ToDoTypes.AddToDoAction,
          payload: addToDoSeedData
        });
      });
      // xit('完成新增Todo Action', ()=>{

      //     const action = new AddToDoSuccessAction(newTodoItem);

      //     expect({...action}).toEqual({
      //       type: '[ToDo] Add ToDo Success',
      //     });
      // });
  });

  describe('更新Todo item', () => {
    describe('更新完整ToDo Item', () => {
      
      it('更新TodoItem Action',()=>{

        const action = new fromToDoActions.UpdateToDoAction(updatedTodoItemSeedData);

         expect({...action}).toEqual({
              type: fromToDoActions.ToDoTypes.UpdateToDoAction,
              payload: updatedTodoItemSeedData
            });

      });
    //   it('完成更新Todo Action', ()=>{

    //     const action = new UpdatedToDoSuccessAction(updatedTodoItem);

    //     expect({...action}).toEqual({
    //       type: '[ToDo] Add ToDo Success',
    //       payload: updatedTodoItem
    //     });
    //    });
    });
  });
  describe('僅Mark ToDo為Priority Item', ()=>{
    it('Prioritized ToDo Action',()=>{
      const prioritizedItem={
        todoId:todoSeedData[2].todoId
      };
      const action= new fromToDoActions.MarkPrioritizedToDoAction(prioritizedItem);

      expect({...action}).toEqual({
        type: fromToDoActions.ToDoTypes.MarkToDoPrioritizedAction,
        payload: prioritizedItem
      });
    });

    it('Cancel Prioritized ToDo Action',()=>{
      const prioritizedItem={
        todoId:todoSeedData[2].todoId
      };
      const action= new fromToDoActions.CancelPrioritizedToDoAction(prioritizedItem);

      expect({...action}).toEqual({
        type: fromToDoActions.ToDoTypes.CancelToDoPrioritizedAction,
        payload: prioritizedItem
      });
    });
  })

  describe('僅mark todoitem為complete', ()=>{

    it('Mark ToDo Complete Action', () => {
      const completedItem = {
        todoId: todoSeedData[0].todoId
      };

      const action = new fromToDoActions.MarkToDoCompletedAction(completedItem);

      expect({...action}).toEqual({
        type: fromToDoActions.ToDoTypes.MarkToDoCompletedAction,
        payload: completedItem
      });

    });

    it('Cancel ToDo Complete Action', () => {
      const completedItem = {
        todoId: todoSeedData[0].todoId
      };

      const action = new fromToDoActions.CancelToDoCompletedAction(completedItem);

      expect({...action}).toEqual({
        type: fromToDoActions.ToDoTypes.CancelToDoCompletedAction,
        payload: completedItem
      });

    });

  });

  describe('任何Action後優先項目排列', () => {
    it('Sort ToDo Action', () => {

      const action = new fromToDoActions.SortToDosAction();
      expect({...action}).toEqual({
        type: fromToDoActions.ToDoTypes.SortToDosAction
      });
    });
  });
});
