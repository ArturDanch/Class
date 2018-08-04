"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(title, model, year, price) {
        this.title = title;
        this.model = model;
        this.year = year;
        this.price = price;
        this.priceWithTax = price * 1.2;
        this.isNew = year > 2012;
    }
    return Car;
}());
exports.Car = Car;
