import { ItemFile } from "./ItemFile";
import { Timestamp } from "rxjs";

export interface ToDoItem{
  todoId:number;
  description:string;
  estimateDate:string;
  estimateTime:string;
  comment:string;
  itemFile: ItemFile;
  isCompleted:boolean;
  isPrioritized:boolean;
  createAt:Date;
  //orderIndex:number;
}
