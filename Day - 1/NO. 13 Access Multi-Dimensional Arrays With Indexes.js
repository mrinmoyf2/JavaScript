/*
One way to think of a multi-dimensional array,
is as an array of arrays.
 When you use brackets to access your array,
  the first set of brackets refers to the entries in the outer-most (the first level) array,
   and each additional pair of brackets refers to the next level of entries inside.
*/
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11

var myData = myArray[2][1];

.console.log(myData);

// Manipulate Arrays With push() :-
/*
An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.
*/
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
.console.log(ourArray);
// Setup
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
// Only change code below this line.
.console.log(myArray);
