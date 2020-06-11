console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  // your code here
  const ul = document.querySelector('ul');
  products.forEach((product) => {
    const li = document.createElement('li');
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}

renderProducts(products);

// searching product through product name
const inputSearch = document.querySelector('#searchProduct');
inputSearch.addEventListener('keyup', refreshOutput);
inputSearch.addEventListener('input', refreshOutput);

// searching product through maximum price
const priceSearch = document.querySelector('#searchPrice');
priceSearch.addEventListener('keyup', refreshOutput);
priceSearch.addEventListener('input', refreshOutput);

// sorting products
const sortProducts = document.querySelector('.sort select');
console.log(sortProducts.value);
sortProducts.addEventListener('change', refreshOutput);

// filtering products
function filterProducts(products, filterObject) {
  return products.filter((product) => {
    // filter by name
    if (filterObject.name !== undefined) {
      if (!product.name.toLocaleLowerCase().trim().includes(filterObject.name.toLocaleLowerCase().trim())) {
        return false;
      }
    }

    // filter by min price
    if (filterObject.minPrice !== undefined) {
      if (product.price < filterObject.minPrice) {
        return false;
      }
    }

    // filter by max price
    if (filterObject.maxPrice !== undefined) {
      if (product.price > filterObject.maxPrice) {
        return false;
      }
    }

    return true;
  });
}

// getting filter objects
function getFilters() {
  const currentFilters = {};

  // filtering by product name
  const inputSearch = document.querySelector('#searchProduct');
  if (inputSearch.value && inputSearch.value.trim()) {
    currentFilters.name = inputSearch.value.trim();
  }

  // filtering by product price
  const priceSearch = document.querySelector('#searchPrice');
  console.log(priceSearch.value);
  if (priceSearch.value && priceSearch.value.trim()) {
    const maxPrice = parseFloat(priceSearch.value.trim());

    if (!isNaN(maxPrice)) {
      currentFilters.maxPrice = maxPrice;
    }
  }
  console.log(currentFilters);
  return currentFilters;
}

// refreshing output
function refreshOutput() {
  const output = document.querySelector('div.products ul');
  output.innerHTML = '';

  // const filteredProducts = filterProducts(products, getFilters());
  const sortedProduct = sortingProducts(products, sortProducts.value);
  const filteredProducts = filterProducts(sortedProduct, getFilters());

  renderProducts(filteredProducts);
}

//  initial load
refreshOutput();

// product sorting function
const x = products.sort((a, b) => a.price - b.price);
console.log(x);
function sortingProducts(productList, sortValue) {
  productList = [...productList];
  console.log(sortValue);

  // sorting cheap products
  if (sortValue === 'cheap') {
    return productList.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'expensive') {
    return productList.sort((a, b) => b.price - a.price);
  } else if (sortValue === 'rating') {
    return productList.sort((a, b) => b.rating - a.rating);
  } else if (sortValue === 'name') {
    return productList.sort((a, b) => {
      const nameA = a.name.toLocaleUpperCase();
      const nameB = b.name.toLocaleUpperCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  return productList;
}

// sorting event handler
const onEventTypeChange = () => {};
