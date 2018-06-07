import { ItemFile } from "./ItemFile";
import { Timestamp } from "rxjs";

export interface ToDoItem{
  todoId:number;
  taskName:string;
  estimateDate:string;
  estimateTime:string;
  comment:string;
  itemFile: ItemFile;
  isCompleted:boolean;
  isPrioritized:boolean;
  modifiedAt:Date;
  //orderIndex:number;
}
