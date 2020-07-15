'use strict';

/*
So we have two classes. Product represents products. ShoppingCart represents a 
shopping cart.

Part 1
Create the functionality for the ShoppingCart class.

addProduct shoproductUld add a product to the products array.
removeProduct shoproductUld remove a product from the products array.
getTotal shoproductUld get the total price of the products in the shoppingcart.
renderProducts shoproductUld render the products to html. You decide what to show and how.
searchProduct shoproductUld return an array of product that match the productName parameter
getUser shoproductUld return a promise with the data from this api: 
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
The Product class shoproductUld get a method called convertToCurrency. The function shoproductUld 
have currency as a parameter. Depending on the provided currency return the correct 
price for the product. Add 3 or more curriencies. Or use an api for getting the price 
dependent on a currency that convertToCurrency uses.
*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // rupee is defaproductUlt currency
  convertToCurrency(currency) {
    if (currency.toLocaleLowerCase() === 'dollars') {
      return (currency = this.price * 75.404);
    } else if (currency.toLocaleLowerCase() === 'euro') {
      return (currency = this.price * 85.93);
    } else if (currency.toLocaleLowerCase() === 'danish krone') {
      return (currency = this.price * 11.54);
    }
  }

  convertToCurrencyUsingApi(currency) {
    const url = `https://api.exchangeratesapi.io/latest?base=INR`;

    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return this.price * data.rates[currency];
      })
      .catch((error) => console.log(error));
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(name, price) {
    return this.products.push(new Product(name, price));
  }

  removeProduct(product) {
    const matchedIndex = this.products.findIndex((element) => {
      return element.name === product;
    });
    if (matchedIndex > -1) {
      return this.products.splice(matchedIndex, 1);
    } else {
      return this.products;
    }
  }

  searchProduct(productName) {
    return this.products.filter((product) => {
      if (product.name.toLocaleLowerCase().includes(productName.toLocaleLowerCase())) {
        return product.name;
      }
    });
  }

  getTotal() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  renderProducts() {
    const productUl = document.querySelector('.productUl');
    productUl.innerHTML = '';

    this.products.forEach((product) => {
      const cartList = document.createElement('li');
      productUl.appendChild(cartList);
      cartList.textContent = `${product.name}`;

      const priceUl = document.querySelector('.priceUl');

      const priceList = document.createElement('li');
      priceUl.appendChild(priceList);
      priceList.textContent = `${product.price}`;
    });
    const paraTotal = document.querySelector('.total');
    paraTotal.textContent = `${this.user.name}'s total products cost is ₹ ${this.getTotal()}`;
  }

  getUser() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => {
        this.user = data;
        console.log(data.name);
        console.log(data);
        this.renderProducts();
      });
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
// console.log(shoppingCart);
console.log(shoppingCart.searchProduct('mous'));
shoppingCart.searchProduct('CPU');
console.log(shoppingCart.getTotal());
shoppingCart.getUser();

// converting rupee to US dollars
const product1 = new Product('Chair', 2000);
product1.convertToCurrencyUsingApi('USD').then((value) => console.log(value));
