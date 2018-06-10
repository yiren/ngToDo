import { ToDoFormData } from "./model/ToDoFormData";
import { ToDoItem } from "./model/ToDoItem";

export const todoSeedData:ToDoItem[]=[
  {
    todoId: 9,
    taskName: '寫新增ToDo Action Test',
    estimateDate: new Date(2018, 5, 4),
    estimateTime: new Date(2018, 5, 4, 14, 30),
    comment: '練習TDD',
    isCompleted: true,
    isPrioritized: false,
    modifiedAt:new Date(2018, 5, 4),
    itemFile:{
        
        fileName:'20180514.zip',
        uploadedDate:new Date(2018, 5, 4),
        
      }
  },
  {
    todoId: 4,
    taskName: '寫更新ToDo Action Test',
    estimateDate: new Date(2018, 5, 5),
    estimateTime: new Date(2018, 5, 5, 18, 30),
    comment: '',
    modifiedAt:new Date(2018, 5, 5),
    isCompleted: false,
    isPrioritized: true,
    itemFile: null
  },
  {
    todoId: 3,
    taskName: '寫更新ToDo Reducer Test',
    estimateDate: new Date(2018, 5, 6),
    modifiedAt:new Date(2018, 5, 6),
    estimateTime: new Date(2018, 5, 4, 9, 30),
    comment: 'Reducer',
    isCompleted: false,
    isPrioritized: false,
    itemFile: null
  },

];

export const todoEntitiesSeedData:{[id:number]:ToDoItem}={
  1: todoSeedData[0],
  2: todoSeedData[1],
  3: todoSeedData[2]
};


export const addToDoSeedData: ToDoFormData={
  taskName:'sw ims',
  estimateDate:new Date(2018,6,8),
  estimateTime:new Date(2018,6,8,14,30),
  comment:'user/password',
  itemFile: {
    fileName:'swims.xlsx'
  },
  isPrioritized:true
};


export const updatedTodoItemSeedData: ToDoItem = {
  todoId: 1,
  taskName: '(更新)寫新增ToDo Action Test',
  estimateDate: new Date(2018,6,8),
  estimateTime: new Date(2018,6,8,11,30),
  comment: '(更新)練習TDD',
  isCompleted: true,
  modifiedAt:new Date(),
  isPrioritized: true,
  itemFile:{
    fileName: '20180528.zip',
    uploadedDate: new Date(),
  }
};
