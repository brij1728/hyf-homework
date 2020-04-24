// When will we be there??
/* 
Write a function where you speficy your speed in km/h and how 
far you have to go in km. The function has to return the time 
it will take to arrive at your destination. The time should be 
formatted like this: 3 hours and 34 minutes. 
*/

const travelInformation = {
  speed: 61,
  destinationDistance: 432,
};

function calulateTravelTime(travelInformation) {
  const time = travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(time);
  const minutes = Math.ceil((time % 1) * 60);
  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calulateTravelTime(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes
