//Problem 1: Smart-ease - Goes Global!
/* 
Following the massive success of Smart-ease's first couple of products 
things have been quite hectic at Smart-ease's shared office space. The
phone is constantly ringing from journalists wanting to interview the
genius behind the success and the greatest developers want to work for you. 
Wired wrote an article with the headline "Smart-ease as good as Smarties"

BUT people are asking: What will be the next product that truly defines 
Smart-ease as the startup of the century?
*/
/* function getFullname(firstname, surname) {
  const fullName = firstname + " " + surname;
  return fullName;
}

const fullname1 = getFullname("Brijesh", "Singh");
const fullname2 = getFullname("Abhishek", "Kumar");

console.log(fullname1);
console.log(fullname2);
 */
//Formal fullname
/* 
On the flight website the user has the possibility to check a checkbox that 
indicates if the user wants to be adressed formally. Lets also change 
getFullname to include support for formal name.

Create an extra parameter useFormalName that is a boolean. If it is true
the function should add a Lord in front of the name.
*/

function getFullname(firstname, surname, useFormalName) {
  let fullName = firstname + " " + surname;
  if (useFormalName === true) {
    return "Lord " + fullName;
  } else if (useFormalName === false) {
    return fullName;
  }
}

const fullname3 = getFullname("Robert", "Clive", true);
const fullname4 = getFullname("Abhishek", "Kumar", false);

console.log(fullname3);
console.log(fullname4);
