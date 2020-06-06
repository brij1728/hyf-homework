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

// Render listings
// Now create a function called renderListings. It should have one parameter:
// listings. When called the function should render the listings in an html list.

function renderHouseListings(listings) {
  const outputDiv = document.querySelector('div#output');
  outputDiv.innerHTML = '';

  const ul = document.createElement('ul');
  outputDiv.appendChild(ul);

  listings.forEach((house) => {
    const li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML = `<h2>${house.type}</h2><span>Price: ${house.price}</span></br><span>Facilities: ${house.facilities}</span>`;
  });
}

const myButton = document.querySelector('button');

myButton.addEventListener('click', () => {
  const houseListings = generateListing(2000);
  const filteredListings = filterlistings(houseListings, filterObject);
  renderHouseListings(filteredListings);
});
