var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
// calls the function
var result = input.map(function(nums) {
var xs = nums.x;
var ys = nums.y;
var xsSquared = Math.pow(xs, 2);
var ysSquared = Math.pow(ys, 2);
var all = xsSquared + ysSquared;
var allSqrRoot = Math.sqrt(all);
  return allSqrRoot
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
