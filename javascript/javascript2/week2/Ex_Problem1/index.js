// lets first create an array of three cars

const cars = [
  {
    make: 'Volvo',
    speed: 45,
    color: 'lightYellow',
  },
  {
    make: 'BMW',
    speed: 87,
    color: 'lightBlue',
  },
  {
    make: 'Fiat',
    speed: 78,
    color: 'lightCyan',
  },
];

// Lets transfrom it from an array of car objects to an array of car colors
const carColors = cars.map(function (car) {
  return car.color;
});

console.log(carColors);

const carSpeeds = cars.map((car) => {
  return car.speed;
});

console.log(carSpeeds);

const fastCars = cars.filter((car) => {
  if (car.speed > 60) {
    return true;
  } else if (car.speed <= 60) {
    return false;
  }
});

console.log(fastCars);

const sortedCars = cars.sort((a, b) => {
  return a.speed - b.speed;
});

console.log(sortedCars);

const array = [1, 2, 3, 23, 12, 24, 34, 45];

array.forEach((value) => {
  console.log(value);
});

array.filter((value) => {
  if (value > 30) {
    console.log(value);
  }
});
