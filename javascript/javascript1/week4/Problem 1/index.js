// Problem 1: Voice assistant
/*
You will be building a voice assistant 🤖! Is that even possible in javascript, 
YES! EVERYTHING is possible in javascript 💪 (nearly)

Create a function called getReply(command). The function should return a response 
that corresponds to the command!

These are the commands you should be able to give the voice assistant:

Hello my name is Benjamin - Should save the name benjamin. and respond with "nice 
to meet you Benjamin". What if someone writes this twice?
What is my name - should respond with the name of the person. What if the name has 
not yet been mentioned?
Add fishing to my todo - Should respond with "fishing added to your todo". Should 
add fishing to a list of todos
Add singing in the shower to my todo - Should add singing in the shower to a list 
of todos
Remove fishing from my todo - Should respond with "Removed fishing from your todo"
What is on my todo? - should respond with the todos. Fx you have 2 todos - fishing 
and singing in the shower
What day is it today? - Should respond with the date in a human readable format. 
E.g. if today is 30/8/2019 then it should respond with 30. of August 2019
Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what 
is 4 * 12 should respond with 48
Set a timer for 4 minutes - Should respond with "Timer set for 4 minutes". When 4 
minutes is up: "Timer done". How do we set a timer in js? Google is your friend here!
Add one or more command to your voice assistant
*/

/*
function getReply(command) {
  let name = [];
  let todo = [];
  const commandsAre = {
    one: 'Hello my name is Benjamin',
    two: 'What is my name?',
    three: 'Add fishing to my todo',
    four: 'Add singing in the shower to my todo',
    five: 'Remove fishing from my todo',
    six: 'What is on my todo?',
    seven: 'What day is it today?',
  };

  name = commandsAre.one.split(' ').pop();

  for (const key in commandsAre) {
    if (commandsAre[key] === command) {
      if (key === 'one') {
        return `\"Nice to meet you ${name}\"`;
      } else if (key === 'two') {
        return `\"Your name is ${name}\"`;
      } else if (key === 'three') {
        todo.push('fishing');
        return `\"fishing added to your todo\"`;
      } else if (key === 'four') {
        todo.push('singing in the shower');
        return `done`;
      } else if (key === 'five') {
        return `\"Removed fishing from your todo\"`;
      } else if (key === 'six') {
        return `\"${todo[0]} and ${todo[1]}\"`;
      }
    }
  }
}

console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply(`What is on my todo?`));
*/

/* function sayResponse(text) {
  console.log(`Bot: ${text}`);

  const li = document.createElement('li');
  li.innerHTML = `<p><b>Bot:</b> ${text}</p>`;
  document.querySelector('#output').appendChild(li);
}

sayResponse('Hey! i am a bot');
sayResponse('Hey! i am a bot');
sayResponse('Hey! i am a bot');
sayResponse('Hey! i am a bot'); */

function writeToChatRoom(handle, text) {
  console.log(`${handle}: ${text}`);
  const outputDiv = document.querySelector('#output');
  const div = document.createElement('div');
  outputDiv.appendChild(div);

  //text = text.replace('\n', '<br>');

  div.outerHTML = `<div class="row top-xs">
    <div class="col-md-1">
    <p><b>${handle}:</b></p>
    </div>
    <div class="col-md-9">
    <p>${text}</p>
    </div>
  </div>`;

  outputDiv.scrollTop = outputDiv.scrollHeight;
}

const inputForm = document.querySelector('#inputForm');
const userInputElement = inputForm.querySelector('input[name="userInput"]');
inputForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(inputForm);
  // const userInput = formData.userInput;

  const userInput = userInputElement.value.trim();

  if (userInput) {
    getReply(userInput);
  }

  userInputElement.value = '';
});

// writeToChatRoom('Bot', 'Hey! I am a bot');

// regexDict for the commandType
const RegexFactory = {
  greet: () => /(hello|hi|hey)+/,
  name: () => /.*my name is/gi,
  addToDo: () => /(?:\s*add\s+)(?<itemName>[\w\s]+)(?:\s+to\s+my\s+todo\s*)/gi,
  removeToDo: () => /(?:\s*remove\s+)(?<itemName>[\w\s]+)(?:\s+from\s+my\s+todo\s*)/gi,
  time: () => /(?<duration>\d+(\.\d+)?)/,
  math: () => /(?:\.*\s*)(?<variable1>-?\d+(\.\d+)?)\s*(?<operator>[-+*/]{1})\s*(?<variable2>-?\d+(\.\d+)?)/gi,
};

function parseCommand(commandText) {
  const commandDetails = { commandType: 'unknown', inputData: undefined };

  const cleanedCommandText = commandText.replace(/\s+/, ' ').trim().toLowerCase();
  console.log(cleanedCommandText);
  if (cleanedCommandText.match(RegexFactory.greet())) {
    commandDetails.commandType = 'greet';
    return commandDetails;
  } else if (cleanedCommandText.includes('my name is')) {
    const name = commandText.replace(RegexFactory.name(), '').trim();
    commandDetails.commandType = 'setName';
    commandDetails.inputData = name;
    console.log(commandDetails);
    return commandDetails;
  } else if (cleanedCommandText.includes('what is my name')) {
    commandDetails.commandType = 'tellName';
    return commandDetails;
  } else if (cleanedCommandText.includes('todo') && cleanedCommandText.includes('show')) {
    // console.log('matched for showing todos');
    commandDetails.commandType = 'showAllTodos';
    return commandDetails;
  } else if (cleanedCommandText.includes('add') && cleanedCommandText.includes('my todo')) {
    // console.log('matched for adding todos');
    commandDetails.commandType = 'addToDo';
    return commandDetails;
  } else if (cleanedCommandText.includes('remove') && cleanedCommandText.includes('from my todo')) {
    // console.log('matched for removing todos');
    commandDetails.commandType = 'removeToDo';
    return commandDetails;
  } else if (
    cleanedCommandText.includes('what') &&
    (cleanedCommandText.includes('day is') || cleanedCommandText.includes('today'))
  ) {
    commandDetails.commandType = 'day';
    return commandDetails;
  } else if (cleanedCommandText.includes('set a timer')) {
    commandDetails.commandType = 'timer';
    return commandDetails;
  } else if (cleanedCommandText.match(RegexFactory.math())) {
    commandDetails.commandType = 'math';
    return commandDetails;
  }

  return commandDetails;
}

const BOT_MEMORY = {
  currentUserName: undefined,
  todoList: [],
};

const writeUserInput = (text) => {
  const userhandle = BOT_MEMORY.currentUserName || 'You';
  writeToChatRoom(userhandle, text);
};

const writeBotResponse = (text) => writeToChatRoom('@bot', text);

function getReply(command) {
  writeUserInput(command);
  // console.log(writeUserInput(command));

  const { commandType, inputData } = parseCommand(command);
  // console.log({ commandType, inputData });

  switch (commandType) {
    case 'unknown':
      writeBotResponse(`Sorry, i don't know how to help with that yet.`);
      break;
    case 'greet':
      writeBotResponse(`Hola! 👋👋😊`);
      break;
    case 'setName':
      BOT_MEMORY.currentUserName = inputData;
      writeBotResponse(`Nice to meet you ${BOT_MEMORY.currentUserName}`);
      break;
    case 'tellName':
      if (BOT_MEMORY.currentUserName) {
        writeBotResponse(`You told me that you're ${BOT_MEMORY.currentUserName}.`);
      } else {
        writeBotResponse(`You never told me that, :-(')`);
      }
      break;
    case 'showAllTodos':
      writeBotResponse(BOT_MEMORY.todoList.join(', \n'));
      break;
    case 'addToDo':
      // if (BOT_MEMORY.todoList) {
      writeBotResponse(addToDoList(command));
      // console.log(BOT_MEMORY.todoList);

      //console.log(BOT_MEMORY.todoList);
      break;
    case 'removeToDo':
      if (BOT_MEMORY.todoList) {
        writeBotResponse(removeToDoList(command));
        // console.log(BOT_MEMORY.todoList);
      }
      //console.log(BOT_MEMORY.todoList);
      break;

    case 'day':
      writeBotResponse(dayOfToday());
      break;
    case 'timer':
      writeBotResponse(setTime(command));
      break;
    case 'math':
      writeBotResponse(simpleMath(command));
      break;
  }

  // console.log(writeBotResponse(commandType));
}

function addToDoList(text) {
  const regex = RegexFactory.addToDo();
  // regex.lastIndex = 0;
  const match = regex.exec(text);

  if (match && match.groups) {
    // console.log(match.groups);
    const itemName = match.groups.itemName;
    console.log(itemName);
    BOT_MEMORY.todoList.push(itemName);
    return itemName + ' added to your todo';
  } else {
    return `Enter valid expression`;
  }
}

function removeToDoList(text) {
  const regex = RegexFactory.removeToDo();
  // regex.lastIndex = 0;
  const matches = regex.exec(text);

  if (matches && matches.groups) {
    const itemName = matches.groups.itemName;

    // const index = BOT_MEMORY.todoList.indexOf(itemName);
    const index = BOT_MEMORY.todoList.findIndex((element) => element.toLowerCase() === itemName.toLowerCase());

    if (index >= 0) {
      BOT_MEMORY.todoList.splice(index, 1);
      return '"Removed ' + itemName + ' from your todo"';
    } else {
      return `"${itemName}" is not on your todo list. Sorry!`;
    }
  } else {
    return `Please enter valid expression`;
  }
}

function dayOfToday() {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let dateObject = new Date();
  let month = monthNames[dateObject.getMonth()];
  let day = String(dateObject.getDate()).padStart(2, '0');
  let year = dateObject.getFullYear();

  let today = `${day}. of ${month} ${year}`;

  return today;
}

function setTime(text) {
  const matches = text.match(RegexFactory.time());

  let durationInMiliSeconds;
  let unit;
  if (matches) {
    const num = parseFloat(matches.groups.duration);
    if (text.toLowerCase().includes('minute')) {
      durationInMiliSeconds = 1000 * 60 * num;
      unit = 'minutes';
    } else if (text.toLowerCase().includes('second')) {
      durationInMiliSeconds = 1000 * num;
      unit = 'seconds';
    }

    setTimeout(() => {
      writeBotResponse(`Timer for ${num} ${unit} completed`);
    }, durationInMiliSeconds);

    return `Timer is set for ${num} ${unit}`;
  }
}

function simpleMath(commandText) {
  const mathRegexp = RegexFactory.math();
  const matches = mathRegexp.exec(commandText);

  if (!matches) {
    return `Please enter valid expression`;
  }

  const a = parseFloat(matches.groups.variable1);
  const b = parseFloat(matches.groups.variable2);

  const operator = matches.groups.operator;
  console.log(a, b, operator, matches.groups);

  if (operator === '+') {
    return a + b;
  } else if (operator === '-') {
    return a - b;
  } else if (operator === '*') {
    return a * b;
  } else if (operator === '/') {
    return a / b;
  } else {
    return `please enter correct operator`;
  }
}

getReply('my name is brijesh');
// getReply('What is my name');
// getReply('Add fishing to my todo');
