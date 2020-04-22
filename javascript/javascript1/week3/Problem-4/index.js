//NOnoN0nOYes (Note taking app)
/*
You are sitting at a meeting. A person is presenting some 
interesting thought that you want to write down. You check 
your bag, but realise that you forgot to bring your notepad. 
Hmm you check the internet for an online solution. But you 
need to signup for them all, too bad... Maybe this could be 
a worthwhile problem so solve. Lets create a simple and easy 
to use notepad.
*/

// Part-1: Save a note
/*
The first thing we will create is the functionality to save a note: 
Create a variable called notes and assign it to an empty array. 
Create a function called saveNote. The saveNote has two parameters:

content parameter is a string.
id is a number.
The saveNote function should push an object to the notes array with 
the keys content and id.
*/

const notes = [];

function saveNote(content, id) {
  notes.push({
    content,
    id,
  });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

// Get a note
/*
Now a user can save a note, but what if a user wants to see 
a specific note, but only remembers the id? Lets create that 
functionality for him: Create a function called getNote. The 
function has one parameter called id. When calling this 
function with an id it should return the relevant note object 
that corresponds to the id. If no id is specified or if the id 
is not a number, log out an error string. Hint: Use a for loop.
*/

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    } else {
      console.log(`Enter a correct id`);
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Log out notes
/*
Now a user can both save and get a note. What if the user just wants 
to read all his notes? Lets also create that functionality: Create a 
function logOutNotesFormatted. When calling the function it should 
log this string out for every note: "The note with id: 1, has the 
following note text: "some example note"."
*/

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
