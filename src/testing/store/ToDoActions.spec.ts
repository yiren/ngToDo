import * as moment from 'moment';

import {uuid} from 'uuid';

describe('測試ToDo Actions', ()=>{
  describe('新增ToDo', ()=>{
    const newTodoItem: ToDoItem={
      todoId: uuid(),
      description: '測試Action',
      estimateDate: moment().toString(),
      estimateTime: moment().toString(),
      comment: 'Comment測試',
      isCompleted: false,
      isEdit: false,
      isPrioritized: true,
      itemFiles:[
        {
          fileId:1,
          fileName:'20180514.zip',
          uploadedDate:moment().toString(),
          filePath:'http://'
        }
      ]
    };
      it('新增Todo Action', ()=>{
        const action = new AddToDoAction(newTodoItem);

        expect({...action}).toEqual({
          type: '[ToDo] Add ToDo Action',
          payload: newTodoItem
        });
      });
      it('完成新增Todo Action', ()=>{
          
          const action = new AddToDoSuccessAction(newTodoItem);
  
          expect({...action}).toEqual({
            type: '[ToDo] Add ToDo Success',
            payload: newTodoItem
          });
    });
  });

  describe('更新Todo item',()=>{
    
    it('更新todoItem',()=>{

    });

    it('僅更新todo為Priority Item',()=>{

    });

    it('mark todoitem為complete',()=>{

    });
  });
  
});
