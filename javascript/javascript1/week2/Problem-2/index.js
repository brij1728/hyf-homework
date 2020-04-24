//Problem 2:Event Application
/* 
Another customer has contacted us. He works for a secret company that rimes 
with foogle. The customer works on their calendar application. They need 
some functionality to help with writing what weekday an event is held.

You specify how many days from today an event is being held. The function 
then figures out what weekday the event is being held. Here is an example:

Today is Sunday and the event is in 5 days. Therefore the event will be held 
on a friday.
*/

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const today = new Date();

function getEventWeekday(days) {
  const eventDay = weekDays[(days + today.getDay()) % weekDays.length];
  return eventDay;
}

console.log(getEventWeekday(19));
console.log(getEventWeekday(40));
