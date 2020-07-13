'use strict';

class Product {
  constructor(name, price, taxRate) {
    this.name = name;
    this.price = price;
    this.taxRate = taxRate;
  }

  get costPrice() {
    return Math.round(this.price / (1 + this.taxRate / 100), 2);
  }
}

class Customer {
  constructor(name, mobileNumber) {
    this.name = name;
    this.mobileNumber = mobileNumber;
  }
}

class OrderItem {
  constructor(product, quantity, discountRate) {
    this.product = product;
    this.quantity = quantity;
    this.discountRate = discountRate;
  }

  get discount() {
    return (this.product.price * this.quantity * this.discountRate) / 100;
  }

  get finalPrice() {
    return this.product.price * this.quantity - this.discountRate;
  }

  get priceBeforeDiscount() {
    return this.product.price * this.quantity;
  }

  get totalTax() {
    return Math.round((this.product.taxRate * this.finalPrice) / this.priceBeforeDiscount, 2);
  }

  render() {
    return `${this.product.name}[MRP ${this.product.price}] [Tax ${this.product.taxRate}%] * ${this.quantity} = ₹${this.priceBeforeDiscount} [Discount ${this.discount}] [Taxes ${this.totalTax}]`;
  }
}

class Order {
  constructor(customer) {
    this.customer = customer;
    this.items = [];
    this.overAllDiscount = 0;
  }

  get totalBillValue() {
    return this.items.reduce((sum, item) => sum + item.finalPrice, 0);
  }

  get totalDiscount() {
    return this.overAllDiscount + this.items.reduce((sum, item) => sum + item.discount, 0);
  }

  get totalTaxes() {
    return this.items.reduce((sum, item) => sum + item.totalTax, 0);
  }

  addItem(product, quantity, discountRate = 0) {
    this.items.push(new OrderItem(product, quantity, discountRate));
  }

  render() {
    for (const orderItem of this.items) {
      console.log(orderItem.render());
    }
  }
}

const gehunAatta = new Product('Gehun Aatta (1Kg)', 26, 0);
const hairOil = new Product('Hair Oil (200ml)', 100, 5);
const premiulGhee = new Product('Premium Ghee (1L)', 1500, 15);

const customer1 = new Customer('Murphy Alex', '+912345678956');

const order1 = new Order(customer1);
order1.addItem(gehunAatta, 3);
order1.addItem(hairOil, 2, 5);
order1.addItem(premiulGhee, 5, 18);
console.log(order1.totalBillValue);

order1.render();

console.log(`Order1.totalBillValue= ${order1.totalBillValue}`);
console.log(`Order1.totalDiscount= ${order1.totalDiscount}`);
console.log(`Order1.totalTaxes= ${order1.totalTaxes}`);
