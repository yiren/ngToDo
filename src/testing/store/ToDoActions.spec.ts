import * as moment from 'moment';

import {uuid} from 'uuid';

describe('測試ToDo Actions', ()=>{
  describe('新增ToDos Action', ()=>{
    
      it('包含載入Todo Action', ()=>{
        const newTodoItem: ToDoItem={
          todoId: uuid(),
          description: '測試Action',
          estimateDate: moment(),
          estimateTime: moment(),
          comment: 'Comment測試',
          isCompleted: false,
          isEdit: false,
          isPrioritized: true,
          itemFiles:[
            {
              fileId:1,
              fileName:'20180514.zip',
              uploadedDate:moment(),
              filePath:'http://'
            }
          ]
        };
        const action = new AddToDosAction(newTodoItem);

        expect({...action}).toEqual({
          type: '[ToDo] Add ToDo',
          payload: newTodoItem
        });
    });
  });
});
