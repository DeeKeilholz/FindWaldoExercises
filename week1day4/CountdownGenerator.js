/*

const generatePrintFunc = function(key) {
  return function(person) {
    console.log(person[key]);
  }
}

const people = [
{name: 'Jane', age: '12' },
{name: 'Tom', age: '11'},
]

//print name
people.forEach(generatePrintFunc('name'));
people.forEach(generatePrintFunc('age'));

// ------------------------------------*/

'use strict';


/*
Implement a function countdownGenerator() that takes in a number x and returns
a function that counts down when it is called (see below):
*/

var countdownGenerator = function (x) {
  var time = x;


return function () {
  if(time > 0) {
    console.log("T-minus" + time + "...");
  } if(time == 0) {
    console.log("Blast off");
  } else {
      if(time < 0) {
        console.log("Rockets already gone, bub!")
      }
  }
}
}

var countdown = countdownGenerator(-12);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
