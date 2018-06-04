


describe('測試ToDo Actions', ()=>{
  describe('載入ToDos Actions', ()=>{
    describe('載入ToDos', ()=>{
      it('包含載入Todo Action', ()=>{
        const action = new LoadingToDosAction();
        expect({...action}).toEqual({
          type: '[ToDo] Loading ToDos'
        });
      });
    });
  });
});
