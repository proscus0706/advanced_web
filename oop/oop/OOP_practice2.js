function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    isRunning = true;
};

Vehicle.prototype.turnOff = function(){
    isRunning = false;
};

Vehicle.prototype.honk = function(){
    if(isRunning){
        return "beep!";
    }
};