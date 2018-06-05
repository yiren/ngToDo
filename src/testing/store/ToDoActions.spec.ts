import * as fromToDoActions from '../../app/store/actions/to-do-data-actions.actions';
import * as moment from 'moment';

import { ToDoItem } from './../../app/shared/model/ToDoItem';
import { todoSeedData } from './../../app/shared/data';

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
    const newTodoItem: ToDoItem = todoSeedData[0];
      it('新增Todo Action', () => {
        const action = new fromToDoActions.AddToDoAction(newTodoItem);

        expect({...action}).toEqual({
          type: fromToDoActions.ToDoTypes.AddToDoAction,
          payload: newTodoItem
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
      const updatedTodoItem: ToDoItem = {
        todoId: 1,
        description: '(更新)寫新增ToDo Action Test',
        estimateDate: '2018/06/04',
        estimateTime: '12:30',
        comment: '(更新)練習TDD',
        isCompleted: true,
        createAt:new Date(2018,6,4),
        isPrioritized: true,
        itemFile:{
          fileId: 1,
          fileName: '20180528.zip',
          uploadedDate: '2018/06/05',
          filePath:'http://xxxx.xxxl.com/dsljio/'
        }
      };
      it('更新TodoItem Action',()=>{

        const action = new fromToDoActions.UpdateToDoAction(updatedTodoItem);

         expect({...action}).toEqual({
              type: fromToDoActions.ToDoTypes.UpdateToDoAction,
              payload: updatedTodoItem
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
        todoId:2
      };
      const action= new fromToDoActions.MarkPrioritizedToDoAction(prioritizedItem);

      expect({...action}).toEqual({
        type: fromToDoActions.ToDoTypes.MarkToDoPrioritizedAction,
        payload: prioritizedItem
      });
    });
  })

  describe('僅mark todoitem為complete', ()=>{

    it('Mark ToDo Complete Action', () => {
      const completedItem = {
        todoId: 3
      };

      const action = new fromToDoActions.MarkToDoCompletedAction(completedItem);

      expect({...action}).toEqual({
        type: fromToDoActions.ToDoTypes.MarkToDoCompletedAction,
        payload: completedItem
      });

    });

  });
});
