function add(a, b, c){
    return a + b + c;
}

describe("add", function(){
    var addSpy, result;
    beforeEach(function(){
        addSpy = spyOn(window, add);
        result = addSpy();
    });
    it("is can have params tested", function(){
        expect(addSpy).toHaveBeenCalled();
        expect(addSpy).toHaveBeenCalledWith(1,2,3);

    });
});

