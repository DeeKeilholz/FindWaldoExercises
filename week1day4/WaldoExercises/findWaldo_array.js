// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var i = 0;
    arr.forEach(function(current) {
    if (current == "Waldo") {
      found(i);   // execute callback
    } else {
      i++
    }
  })
}
function actionWhenFound(i) {
  console.log("Find Waldo at " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
