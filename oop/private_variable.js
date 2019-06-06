function classRoom(){
    var instructors = ["Elie", "Colt"];
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructors: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}


var class1 = classRoom();
class1.addInstructors("kim");
class1.addInstructors("lee");

console.log(class1.getInstructors());

var class2 = classRoom();
console.log(class2.getInstructors());