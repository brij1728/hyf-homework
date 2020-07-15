'use strict';

/*
So we have two classes. Product represents products. ShoppingCart represents a 
shopping cart.

Part 1
Create the functionality for the ShoppingCart class.

addProduct should add a product to the products array.
removeProduct should remove a product from the products array.
getTotal should get the total price of the products in the shoppingcart.
renderProducts should render the products to html. You decide what to show and how.
searchProduct should return an array of product that match the productName parameter
getUser should return a promise with the data from this api: 
https://jsonplaceholder.typicode.com/users/1

Part 2
Try and create some products and call the addProduct and the removeProduct functions 
to see if they work.

Call the getUser function to get a user. When the user has been fetched. Render the 
products using the renderProducts method. Also render the username and the total 
price of the products in the shoppingcart.

Optional and a little tricky! Create a searchbar where a user can search for a product. 
Matching product are shown as an autocomplete. Clicking a product in the autocomplete 
opens a modal with product information.

Part 3
The Product class should get a method called convertToCurrency. The function should 
have currency as a parameter. Depending on the provided currency return the correct 
price for the product. Add 3 or more curriencies. Or use an api for getting the price 
dependent on a currency that convertToCurrency uses.
*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(name, price) {
    // Implement functionality here
    return this.products.push(new Product(name, price));
  }

  // removeProduct(product) {
  //   const p = this.products.indexOf(product);
  //   console.log(p);
  //   if (this.products[p] === product) {
  //     return this.products.splice(product, 1);
  //   }
  // }

  removeProduct(name) {
    for (const product of this.products) {
      const j = this.products.indexOf(product);
      if (this.products[j].name === name) {
        return this.products.splice(product, 1);
      }
    }
  }

  searchProduct(productName) {
    return this.products.filter((product) => product.name.toLocaleLowerCase() === productName.toLocaleLowerCase());
  }

  getTotal() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  renderProducts() {
    // Implement functionality here
  }

  getUser() {
    // Implement functionality here
  }
}

const shoppingCart = new ShoppingCart();
// const flatscreen = new Product('flat-screen', 5000);
shoppingCart.addProduct('flat-screen', 5000);
shoppingCart.addProduct('CPU', 10000);
shoppingCart.addProduct('keyboard', 1500);
shoppingCart.addProduct('mouse', 500);

console.log(shoppingCart);

shoppingCart.removeProduct('CPU');
console.log(shoppingCart);
