"use strict";
exports.__esModule = true;
var cars_1 = require("./cars");
var car_model_1 = require("./car.model");
var myCars = cars_1.CARS_ARRAY;
var getUpdatedCars = function (cars) {
    var updatedCars = [];
    for (var _i = 0, cars_2 = cars; _i < cars_2.length; _i++) {
        var carsObj = cars_2[_i];
        updatedCars.push(new car_model_1.Car(carsObj.title, carsObj.model, carsObj.year, carsObj.price));
    }
    return updatedCars;
};
console.log(getUpdatedCars(myCars));
