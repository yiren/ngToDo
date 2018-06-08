

export interface ToDoFormData {
  taskName:string;
  estimateDate:Date;
  estimateTime:Date;
  comment:string;
  itemFile: {
    fileName:string
  };
  isPrioritized:boolean;
  //orderIndex:number;
}
