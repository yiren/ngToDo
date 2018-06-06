import * as fromApp from './../../app/store/index';
import * as fromToDoActions from '../../app/store/actions/to-do-data-actions.actions';
import * as fromToDoReducer from './../../app/store/reducers/to-do-data-reducer.reducer';

import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { todoEntities, todoSeedData } from '../../app/shared/data';

import { TestBed } from '@angular/core/testing';

describe('測試ToDo Selectors', () => {
  let store: Store<fromApp.AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromApp.reducers,
          todos: fromToDoReducer.toDoReducer
        })
      ]
    }).compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('Todos Enitiies Selector', ()=>{
    let result;
    
    store
    .select(fromToDoReducer.selectToDoEntities)
    .subscribe(data => result = data);

    expect(result).toEqual(todoEntities);

    const todosFromRemote = [todoSeedData[1], todoSeedData[2]];
    store.dispatch(new fromToDoActions.LoadToDosSuccessAction(todosFromRemote));

    const newEntities={
      [todoSeedData[1].todoId]:todoSeedData[1],
      [todoSeedData[2].todoId]:todoSeedData[2]
    }
    expect(result).toEqual(newEntities);
  });

  it('All Todos Selector', ()=>{
    let result;
    //console.log(store);
    store

    .select(fromToDoReducer.selectAllToDos)

    .subscribe(data => result = data);
    //console.log(result);
    
    expect(result).toEqual(todoSeedData);

    const todosFromRemote = [todoSeedData[1], todoSeedData[2]];
    store.dispatch(new fromToDoActions.LoadToDosSuccessAction(todosFromRemote));

    
    expect(result).toEqual(todosFromRemote);
  });

});
