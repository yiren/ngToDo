import { ToDoItem } from "./model/ToDoItem";

export const todoSeedData:ToDoItem[]=[
  {
    todoId: 1,
    taskName: '寫新增ToDo Action Test',
    estimateDate: '2018/06/04',
    estimateTime: '14:30',
    comment: '練習TDD',
    isCompleted: false,
    isPrioritized: false,
    modifiedAt:new Date(2018, 6, 4),
    itemFile:{
        fileId:1,
        fileName:'20180514.zip',
        uploadedDate:'2018/06/04',
        filePath:'http://xxxx.xxxl.com/dsljio/'
      }
  },
  {
    todoId: 2,
    taskName: '寫更新ToDo Action Test',
    estimateDate: '2018/06/05',
    estimateTime: '09:30',
    comment: '',
    modifiedAt:new Date(2018, 6, 5),
    isCompleted: false,
    isPrioritized: true,
    itemFile: null
  },
  {
    todoId: 3,
    taskName: '寫更新ToDo Reducer Test',
    estimateDate: '2018/06/06',
    modifiedAt:new Date(2018, 6, 6),
    estimateTime: '15:30',
    comment: 'Reducer',
    isCompleted: false,
    isPrioritized: false,
    itemFile: null
  },

];

export const todoEntities:{[id:number]:ToDoItem}={
  1: todoSeedData[0],
  2: todoSeedData[1],
  3: todoSeedData[2]
};
