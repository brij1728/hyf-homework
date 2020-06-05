'use strict';

function randomIntFromInterval(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomIntFromInterval(2, 8));
console.log(randomIntFromInterval(12, 28));
console.log(randomIntFromInterval(32, 58));

function generateListing(numberOfListing) {
  const listings = [];

  const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
  const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];

  for (let i = 0; i < numberOfListing; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    // console.log(randomTypeIndex);
    const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
    // console.log(numberOfFacilities);
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
      // console.log(randomIndexFacilities);
      const randomFacilities = listingFacilities[randomIndexFacilities];
      // console.log(randomFacilities);

      if (!facilities.includes(randomFacilities)) {
        facilities.push(randomFacilities);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }
  return listings;
  // listings.forEach(() => console.log(generateListing(37)));
}

const listings = generateListing(37);

console.log(listings);

// ForEach : Create 37 listings and log out every listings size
listings.forEach((list) => console.log(list.size));

// Map: Create an array that contains all the 37 listing prices.
console.log(listings.map((list) => list.price));

// ===== Filter ======
// 1. Create an array of cheap listings. You define what cheap means.
// Each item in this array should be of type object
const cheapListings = listings.filter((list) => list.price < 2500);
console.log(cheapListings);

// 2. Create an array of expensize listings prices. Each item in this array should be of type number

const expensizeListingPrices = listings
  .filter((list) => {
    return list.price > 6000;
  })
  .map((list) => {
    return list.price;
  });
console.log(expensizeListingPrices);
// 3. Create an array of listings that have parking. Each item in this array should be of type object
const listHaveParking = listings.filter((list) => list.facilities.includes('Parkering'));
console.log(listHaveParking);
const listHavetype = listings.filter((list) => list.type === 'Farm');
console.log(listHavetype);

// Listing Project

// 1. Filter Listing
// const listings = generateListings(20);

function filterlistings(houseListings, filterObject) {
  return houseListings.filter((house) => {
    if (filterObject.type !== undefined) {
      if (house.type.toLocaleLowerCase().trim() !== filterObject.type.toLocaleLowerCase().trim()) {
        return false;
      }
    }

    // filter by "hasGarden"
    if (filterObject.hasGarden !== undefined) {
      if (house.hasGarden !== filterObject.hasGarden) {
        return false;
      }
    }

    // filter by "minPrice"
    if (filterObject.minPrice !== undefined) {
      if (house.price < filterObject.minPrice) {
        return false;
      }
    }

    // filter by "maxPrice"
    if (filterObject.maxPrice !== undefined) {
      if (house.price > filterObject.maxPrice) {
        return false;
      }
    }
    return true;
  });
}

const filterObject = {
  type: 'SHED',
  hasGarden: true,
  minPrice: 500,
  maxPrice: 4000,
};

const houseListings = generateListing(20000);
console.log(filterlistings(houseListings, filterObject));

function renderListings(houseListings) {
  const ul = document.createElement('ul');
  for (const list of houseListings) {
    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    p1.innerHTML = list.price;
    p2.innerHTML = list.hasGarden;
    h2.innerHTML = list.type;

    li.appendChild(h2);
    li.appendChild(p1);
    li.appendChild(p2);

    ul.appendChild(li);
  }

  document.querySelector('body').appendChild(ul);
}

const myButton = document.querySelector('button');

myButton.addEventListener('click', renderListings(houseListings));
