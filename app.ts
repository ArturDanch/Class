import { CARS_ARRAY } from './cars';
import { Car } from './car.model';

let myCars = CARS_ARRAY;

const getUpdatedCars = (cars) => {
    let updatedCars = [];
    for (let carsObj of cars) {
        updatedCars.push(new Car(carsObj.title, carsObj.model, carsObj.year, carsObj.price));
    }
    return updatedCars;
}

console.log(getUpdatedCars(myCars));