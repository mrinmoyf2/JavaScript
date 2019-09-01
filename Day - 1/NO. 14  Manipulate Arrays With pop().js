/*
Another way to change the data in an array is with the .pop() function.

.pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.
*/

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]

//pop() always removes the last element of an array. What if you want to remove the first?:-
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
.console.log(removedFromourArray);
.console.log(ourArray);
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();
.console.log(removedFromMyArray);
.console.log(myArray);

//add elements in front of the array.::---
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35]);
.console.log(myArray);
