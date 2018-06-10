import { ToDoFormData } from "./model/ToDoFormData";
import { ToDoItem } from "./model/ToDoItem";

export const todoSeedData:ToDoItem[]=[
  {
    todoId: 9,
    taskName: '寫新增ToDo Action Test',
    estimateDate: new Date(2018, 4, 14),
    estimateTime: new Date(2018, 4, 14, 14, 30),
    comment: '練習TDD',
    isCompleted: false,
    isPrioritized: true,
    modifiedAt:new Date(2018, 5, 10),
    itemFile:{
        
        fileName:'20180514.zip',
        uploadedDate:new Date(2018, 5, 4),
        
      }
  },
  {
    todoId: 4,
    taskName: '寫更新ToDo Action Test',
    estimateDate: new Date(2018, 5, 18),
    estimateTime: new Date(2018, 5, 18, 18, 30),
    comment: '',
    modifiedAt:new Date(2018, 5, 7),
    isCompleted: false,
    isPrioritized: false,
    itemFile: null
  },
  {
    todoId: 3,
    taskName: '寫更新ToDo Reducer Test',
    estimateDate: null,
    modifiedAt:new Date(2018, 5, 6),
    estimateTime: null,
    comment: null,
    isCompleted: false,
    isPrioritized: false,
    itemFile: {
      fileName:'reducerTest.zip',
      uploadedDate:new Date(2018, 5, 4),  
    }
  },
  {
    todoId: 7,
    taskName: '用flexbox排版nav',
    estimateDate: null,
    modifiedAt:new Date(2018, 5, 6),
    estimateTime: null,
    comment: '使用@angular/flexbox',
    isCompleted: false,
    isPrioritized: true,
    itemFile: {
      fileName:'angularFlexbox.zip',
      uploadedDate:new Date(2018, 5, 4),  
    }
  },
  {
    todoId: 18,
    taskName: '登記參加F2E活動',
    estimateDate: null,
    modifiedAt:new Date(2018, 4, 22),
    estimateTime: null,
    comment: null,
    isCompleted: true,
    isPrioritized: false,
    itemFile: null
  }

];

export const todoEntitiesSeedData:{[id:number]:ToDoItem}={
  [todoSeedData[0].todoId]: todoSeedData[0],
  [todoSeedData[1].todoId]: todoSeedData[1],
  [todoSeedData[2].todoId]: todoSeedData[2],
  [todoSeedData[3].todoId]: todoSeedData[3],
  [todoSeedData[4].todoId]: todoSeedData[4]
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
  todoId: todoSeedData[0].todoId,
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
