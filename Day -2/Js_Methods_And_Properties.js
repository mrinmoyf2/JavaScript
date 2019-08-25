//Wellcome to my Js repo.

var sentence = "Hello World !";
//output text
console.log(sentence);
//text length
console.log(sentence.length);
//the specific length of a letter
console.log(sentence.indexOf("w"));
//Replacing word
console.log(sentence.replace("Hello", "Hola"));
//UpperCase and Lowercase
console.log(sentence.toUpperCase());
console.log(sentence.toLowercase());
//Slice
console.log(sentence.slice(6, 13));



var num = 50;
var num2 = 50.5;
//calculations
console.log(num * 2);
console.log(num / 2);
console.log(num - 2);
console.log(num + 2);
console.log(num % 2);

//Methods

console.log(Number.isInteger(num));
console.log(Number.isInteger(num2));

//Math Operation

console.log(Math.pow(7, 3)); //The Math.pow() function returns the base to the exponent power, that is, baseexponent.

console.log(Math.abs(-2));
/*
The Math.abs() function returns the absolute value of a number, that is

                                          x	 if  x > 0
                   Math.abs(x) = |x| = {	0	if   x = 0
                                        	-x	if x < 0
  */
console.log(Math.round(3.56));
console.log(Math.floor(3.56));
console.log(Math.min(44, 7, 90));
console.log(Math.max(44, 7, 90));
console.log(Math.random()); // random number between 0 and 1.
console.log(Math.random() * 20); // random number between 0 and 20.
console.log(Math.floor(Math.random() * 20)); /* It eill give you a random number every single time between 1 and 20.*/

// Array
var fruits = ["apple", "Banana", "Orange"];

console.log(fruits.reverse());
fruits.push("cherry");
fruits.pop(); //delete the last one.

fruits.unshift("Blueberry"); //add the word at first.
fruits.shift(); //delete word, the first one.


console.log(fruits.join("---")); // join it by three "-".

//Objects
var student = {
  "name": "Priyadarshan Sarkar",
  "age": 17,
  "profession": "student",
  "email": "Priyadarsanf2@gmail.com",
  "Fav_num": [15, 10, 12]
}

console.log(student.name);
console.log(student.age);
console.log(student.profession);
console.log(student.email);
console.log(student.Fav_num[0]);
console.log(student.Fav_num[1]);
console.log(student.Fav_num[2]);

delete student["age"];
console.log(student);




/*
    For further information :-
          https://www.w3schools.com/js/
*/
