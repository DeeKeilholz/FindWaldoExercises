/*

*/

var str = process.argv.slice(2)
// console.log(str instanceof Array)

function countLetters(str) {
 var noSpaces = str.join("").split('');
 // join converts array to string
 // split converts string to array
 var uniqueCharacters = {}
 // console.log(noSpaces)



 // if value does not exist, set it to 1
 // if value does exist, increment by 1
 function letterCounter (letter, counter){
  // console.log(counter)

   if(!uniqueCharacters.hasOwnProperty(letter)){
     uniqueCharacters[letter] = [counter];
   } else {
     uniqueCharacters[letter].push(counter);
   }
 }

 noSpaces.forEach(letterCounter)





 return uniqueCharacters

}

console.log(countLetters(str))

