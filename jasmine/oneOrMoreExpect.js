//좋은 코드가 아니다. functionality의 기준으로 나눠 줘야함.
describe("Earth", function(){
    it("is round and has a method to check what number it is from the sun", function(){
        expect(earth.isRound()).toBe(true);
        expect(earth.howFarFromSun).toBe(jasmine.any(Function));
        expect(earth.howFarFromSun()).toBe(3);
    })
});

//좋은 코드가 아니다. functionality의 기준으로 나눠 줘야함.
describe("Earth", function(){
    it("is round", function(){
        expect(earth.isRound()).toBe(true);
    });
    it("has a method to check what number it is from the sun", function(){
        expect(earth.howFarFromSun).toBe(jasmine.any(Function));
        expect(earth.howFarFromSun()).toBe(3);
    });
});