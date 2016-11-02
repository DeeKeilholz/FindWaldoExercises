//program that takes an unlimited number of console arguments
var string = process.argv.slice(2)


function countLetters (string) {

var count = {};

// join converts array to string, split converts string back to array
string.join('').split('').forEach(function(character) {
  if (count[character] == true) {
     count[character]++
} else {
     count[character] = 1
}
  // alternative way of writing this if statemetn:
  //count[character] ? count[character]++ : count[character] = 1;
})
return count;
}

console.log(countLetters(string));
