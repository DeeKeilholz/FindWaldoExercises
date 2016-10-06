//Return all unique charecters in a string
//Return number of occurance of each letter as an Object
//Each letter creates a key in an object
//New instance will add to string?

var str = process.argv.slice(2)
// console.log(str instanceof Array)

function countLetters(str) {
 var noSpaces = str.join("").split('');
 // join converts array to string
 // split converts string to array
 var uniqueCharacters = {}
 // console.log(noSpaces)

 //
 // for (var i = 0; i < noSpaces.length; i++){
 //
 //   console.log(noSpaces[i]);
 //
 // }

 // if value does not exist, set it to 1
 // if value does exist, increment by 1
 var letterCounter = function(letter, counter){

   if(!uniqueCharacters.hasOwnProperty(letter)){
     uniqueCharacters[letter] = 1;
   } else
     // increment
    uniqueCharacters[letter] ++;

   }
 }

 noSpaces.forEach(letterCounter)





 return uniqueCharacters

}

console.log(countLetters(str))
//
// console.log
//
// uniqueCharacters["a"] = 1