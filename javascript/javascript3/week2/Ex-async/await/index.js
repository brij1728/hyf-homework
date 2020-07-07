'use strict';

// Using async await

// fetch yes or no from this api: https://yesno.wtf/api. log out the answer

async function getYesNo() {
  console.log(`Before we fetch data`);

  const response = await fetch('https://yesno.wtf/api');
  console.log(`This is logged after fetching data`);

  const data = await response.json();
  console.log(`This is logged after json data! 😎`);
  console.log(data);
  console.log(data.answer);

  return data;
}

getYesNo();
