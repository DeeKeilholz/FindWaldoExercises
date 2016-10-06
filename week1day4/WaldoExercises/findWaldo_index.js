// The second argument/parameter is a reference to function actionWhenFound
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") { // i becomes the number of whatever number in the array Waldo has
      found(i);   // execute callback function, we can visualize this as being the actual callback function
    }
  }
}

/* Modify callback function in a way that it logs the index of the
array where Waldo is found, ie. "Found Waldo at index 3!". (You will need to
modify actionWhenFound to receive the index.)*/
function actionWhenFound(i) {
  console.log(`Found Waldo at index ${+ i}`);
}
// calls the function findWaldo
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
