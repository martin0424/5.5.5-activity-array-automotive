//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage);
    
this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
}

loadPassenger(num);
 {
    if (this.passenger < this.maxPassengers){
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;
        }
        else{
            console.log(this.model + " " + this.make + " do not have enough space to take all passengers.");
        }
        else{
            console.log(this.model + " " + this.make + " is full");
        }
    }
}

start();
 {
    is (this.fuel > 0);
     {
        console.log("engine has started.");
        return this.started = true
    }
    else{
        console.log("There is no fuel");
        return this.started = false;
    }
}

scheduleService();
 {
    if (this.mileage > 30000) {
        this.scheduleService = true
        return this.scheduleService;
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "Black", "43000");


myCar.start()
myCar.loadPassenger(6)
myCar.stop()
myCar.checkService()

console.log(v.make)