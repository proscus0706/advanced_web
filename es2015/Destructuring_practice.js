function createInstructor(options){
    var options = options || {};
    var name = options.name || {first:"Matt", last:"Lane"};
    var isHilarious = options.isHilarious || false;
    return [name.first, name.last, isHilarious];
}

createInstructor();
// ["Matt","Lane",false]
createInstructor({isHilarious:true});
// ["Matt","Lane",true]
createInstructor({name: {first:"Tim", last:"Garcia"}});
// ["Tim","Garcia",false]

function createInstructor({name = {first:"Matt", last:"Lane"}, isHilarious=false} = {}){
    return [name.first, name.last, isHilarious];
}