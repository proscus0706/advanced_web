describe("a simple setInterval", function(){
    var dummyFunction;

    beforeEach(function () {
        dummyFunction = jasmine.createSpy("dummyFunction");
        jasmine.clock().install();
    });

    afterEach(function(){
        jasmine.clock().uninstall();
    });

    it("checks to see the number of times the function is invoked", function(){
        setInterval(function(){
            dummyFunction();
        }, 1000);
        jasmine.clock().tick(999);
        expect(dummyFunction.calls.count()).toBe(0);
        jasmine.clock().tick(1000);
        expect(dummyFunction.calls.count()).toBe(1);
        jasmine.clock().tick(1);
        expect(dummyFunction.calls.count()).toBe(2);
    })

});