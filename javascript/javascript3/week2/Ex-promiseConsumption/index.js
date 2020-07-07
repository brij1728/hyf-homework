'use strict';

// Using promises

// fetch yes or no from this api: https://yesno.wtf/api. log out the answer

fetch('https://yesno.wtf/api')
  .then((response) => response.json())
  .then((data) => {
    console.log(data.answer);
  })
  .catch((error) => console.log(error));

// Try fetching a url that rejects fx https://knajskdskj.jasdk. Log out the error message
fetch('https://knajskdskj.jasdk')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
