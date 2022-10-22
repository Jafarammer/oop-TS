"use strict";
class Product {
    constructor() {
        this._price = 0;
        this.discount = 0.05;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value - (value * this.discount);
    }
}
const product = new Product();
product.price = 2000;
console.log(product.price);
