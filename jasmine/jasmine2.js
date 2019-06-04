describe("#push", function(){
   it("adds elements to an array", function(){
       var arr = [1, 3, 5];
       arr.push(7);
       expect(arr).toEqual([1, 3, 5, 7]);
   });
   it("returns the new length of the array", function(){
       var arr = [1, 3, 5];
       expect(arr.push(7)).toBe(4);
   });
   it("adds anything into the array", function(){
       var arr = [1, 3, 5];
       expect(arr.push({})).toBe(4);
   })

});

// => Too many repetitions
// Refactoring

describe("Arrays", function(){
    var arr;
    beforeEach(function(){
        arr = [1, 3, 5];
    });
    it("adds elements to an array", function(){
        arr.push(7);
        expect(arr).toEqual([1, 3, 5, 7]);
    });
    it("returns the new length of the array", function(){
        expect(arr.push(7)).toBe(4);
    });
    it("adds anything into the array", function(){
        expect(arr.push({})).toBe(4);
    });
});

describe("Counting", function(){
    var count = 0;

    beforeEach(function(){
        count++;
    });

    afterEach(function(){
        count = 0;
    });

    it("has a counter that increments", function(){
        expect(count).toBe(1);
    });

    it("gets reset", function(){
        expect(count).toBe(1);
    });
});

var arr = [];
beforeAll(function(){
    arr = [1,2,3];
});
describe("Counting", function(){
    it("starts with an array", function(){
        arr.push(4);
        expect(1).toBe(1);
    });
    it("keeps mutating that array", function(){
        console.log(arr); //[1, 2, 3, 4]
        arr.push(5);
        expect(1).toBe(1);
    });
});
describe("Again", function(){
    it("keeps mutating the array...again", function(){
        console.log(arr);
        expect(1).toBe(1);
    });
});