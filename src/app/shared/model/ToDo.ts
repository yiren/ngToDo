import { ItemFile } from "./ItemFile";

export interface ToDo{
  taskName:string;
  estimateDate:string;
  estimateTime:string;
  comment:string;
  itemFile: {
    fileName:string,
    filePath:string,
    createAt:Date
  };
  isPrioritized:boolean;
  //orderIndex:number;
}
