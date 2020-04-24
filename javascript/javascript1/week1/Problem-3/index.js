//Problem 3: Housey pricey (A house price estimator)

/* 
 Two of your friends are considering buying a house, but cannot figure out what the right price should be. Your friends know the width, the height and the depth of the house and the garden size. Lets help them figure out if they paid too much: 

House calculated formula is:
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 

Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000. 

Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above.
*/

const peterHouseWide = 8;
const peterHouseDeep = 10;
const peterHouseHigh = 10;
const petergardenSize = 100; //in meter squares
const peterHouseCost = 2500000;

const peterHouseVolumeInMeters = peterHouseWide * peterHouseDeep * peterHouseHigh;

const peterHousePrice = peterHouseVolumeInMeters * 2.5 * 1000 + petergardenSize * 300;
console.log('PeterHousePrice is:', peterHousePrice);

console.log(peterHousePrice > peterHouseCost);
console.log('Peter is not paying more than his House cost price.');

const juliaHouseWide = 5;
const juliaHouseDeep = 11;
const juliaHouseHigh = 8;
const juliagardenSize = 70;
const juliaHouseCost = 1000000;

const juliaHouseVolumeInMeters = juliaHouseWide * juliaHouseDeep * juliaHouseHigh;

const juliaHousePrice = juliaHouseVolumeInMeters * 2.5 * 1000 + juliagardenSize * 300;
console.log('JuliaHousePrice is:', juliaHousePrice);

console.log(juliaHousePrice > juliaHouseCost);

console.log('Julia is paying more than her House cost price.');
