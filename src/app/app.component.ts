import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit(){

    //this.store.select(fromToDoReducer.selectAllToDos).subscribe(console.log);
  }

}
