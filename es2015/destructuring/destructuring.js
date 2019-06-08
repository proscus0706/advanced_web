//Destructuring은 단순하게 말해서 어레이나, 객체에서 값을 추출하는 방법이다.
/* Destructuring */

// ★ Assign variables from objects
var voxel = {x:3.6,y:7.4,z:6.54};
var {x : a, y : b, z : c} = voxel;
var {x, y, z} = voxel;

// ★ Assign variables from nested objects
const nest = {
    start: {x : 5, y : 6},
    end: {x : 6, y : -9}
};
const {start : {x : startX, y: startY}} = nest;

// * Assign variables from arrays
const [q, r] = [1,2,3,4,5];
const [i,,j] = [1,2,3,4,5];
console.log(j); //2번 인덱스를 출력

// * Rest Operator to Reassign Array Elements
const[o, p, ...rest] = [1,2,3,4,5];
console.log(rest); //[3, 4, 5]를 출력

// * Pass an object as a function's parameters
const profileUpdate = (profileData) => {
    const {name,age,nationality,location} = profileData;
    // do something with these variables
};

const profileUpdate = ({name,age,nationality,location}) => {
    // do something with these variables

};