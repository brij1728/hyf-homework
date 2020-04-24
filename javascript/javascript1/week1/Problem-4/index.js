//Problem 4: Ez Namey (Startup name generator) Optional

/* 
At a meetup you overhear a conversation between two developers. It went something like this: "Man i wish picking a startup name was easier! You need to be creative, funny and interesting, its nearly impossible!" Another problem to solve, awesome!

Lets help people who struggle finding a startup name by creating some code!

Create two arrays called firstWords, secondWords. The arrays should have 10 elements containing strings of possible startup names. Some examples could be: "Easy", "Awesome", "Corporate". Create a variable called startupName that will contain created startup name.

Using a random index (you choose) of the arrays and concatenation of strings, create and log the new startup name and the number of characters in it. An example could be: "The startup: "Easy Corporation" contains 16 characters"
*/

const firstWords = ['Easy', 'Corporate', 'Awesome', 'Hello', 'Grocery', 'India', 'Mind', 'China', 'Pandemic', 'WHO'];
const secondWords = ['World', 'Salon', 'UN', 'Day', 'USA', 'Himalaya', 'Kashi', 'Paradise', 'Ganga', 'Reliance'];

const startupName1 = firstWords[Math.floor(Math.random() * firstWords.length)];

console.log(startupName1);

const startupName2 = secondWords[Math.floor(Math.random() * secondWords.length)];

console.log(startupName2);

console.log(startupName1.concat(' ', startupName2));

const startupName = startupName1.concat(' ', startupName2);

console.log(`\"The startup: \"${startupName}\" contains ${startupName.length} characters\"`);
