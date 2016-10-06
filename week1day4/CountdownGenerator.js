'use strict';
/*
Implement a function countdownGenerator() that takes in a number x and returns
a function that counts down when it is called (see below):
*/

let countdownGenerator = function (x) {
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

const countdown = countdownGenerator(-12);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
