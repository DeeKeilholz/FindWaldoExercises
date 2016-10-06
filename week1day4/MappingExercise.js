// Setting up a function that returns a new array and squares each value in the array I'm passing when I call function.
function myFun(placeholderForValue) {
  return placeholderForValue.map(Math.sqrt);
}
console.log(myFun([1,3,4]));

/* call my function map
var myFun = map(["ground", "control", "to", "major", "tom"], function(elm){return elm.length }); */
