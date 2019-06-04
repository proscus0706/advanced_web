function add(a, b, c){
    return a + b + c;
}

describe("add", function(){
   var addSpy, result;
   beforeEach(function(){
       addSpy = spyOne(window, "add").and.callThrough();
       result = addSpy(1, 2, 3);
   });
    it("can have a return value tested", function(){
        expect(result).toEqual(6);
    });
});