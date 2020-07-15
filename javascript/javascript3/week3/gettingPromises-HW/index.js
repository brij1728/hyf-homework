'use strict';
/*
Lets use the github api to see what repositories different users have. You can 
use this url to get repositories for a specific github username, in this case 
the username benna100: https://api.github.com/search/repositories?q=user:benna100. 
Select 3 classmates github username that you want to show repositories for.

Fetch all the 3 classmates repositories at the same time using Promise.all. Remember 
the all at once exercise here?

When you have the data for the different repositories, render the fullname of the 
repo, url of the repo, and the owner of the repo. See github-repos as an example 
of how the renderered repos should look. You are more than welcome to style it a 
bit nicer!
*/

const div = document.createElement('div');

async function fetchJson(user) {
  const url = `https://api.github.com/search/repositories?q=user:${user}`;
  // const response = (await fetch(url))
  return await (await fetch(url)).json();
}

Promise.all([fetchJson('brij1728'), fetchJson('abhishe3571'), fetchJson('benna100'), fetchJson('pankaj28843')])
  .then((users) => {
    console.log(users);
    renderRepositories(users);
  })
  .catch((error) => console.log(error));

function renderRepositories(users) {
  users.forEach((user) => {
    const userUl = document.createElement('ul');
    document.body.appendChild(userUl);
    userUl.innerHTML = `<h1>${user.items[0].owner.login}</h1>`;

    user.items.forEach((item) => {
      const itemList = document.createElement('li');
      userUl.appendChild(itemList).innerHTML = `<h3>${item.name}: ${item.html_url}</h3>`;
    });
  });
}
