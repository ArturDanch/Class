export class Car {
    public title: string;
    public model: string;
    public year: number;
    public price: number;
    private priceWithTax: number;
    private isNew: boolean;
    constructor(title: string, model: string, year: number, price: number) {
        this.title = title;
        this.model = model;
        this.year = year;
        this.price = price;
        this.priceWithTax = price * 1.2;
        this.isNew = year > 2012;
    }
}