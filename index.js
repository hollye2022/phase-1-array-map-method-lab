const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const newArray = tutorials.map(function(tutorial) {return tutorial.split(" ")});
function titleCased () {
  let newTutorial = []
  for (let subArray of newArray) {
   let result = subArray.map(function(element) {return  element[0].toUpperCase() + element.slice(1)});
   newTutorial.push(result.join(" "));
  }
  return newTutorial;
}

// titleCase1 = newArray[1].map(function(element) {return  element[0].toUpperCase() + element.slice(1)});


