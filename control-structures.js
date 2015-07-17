/*
Loops are intersting in general, but extraordinarily useful
in the context of arrays. Arrays are simply indexed collections
of JavaScript entities. One way of thinking of arrays is a single 
variable that can hold multiple values.
 */

var greetings = ["hello", "namaste", "hola", "salut", "aloha"];

var primes = [2,3,4,7,13,17,19,23,29];

// One way to print all the elements in an array 

var index;

for (index = 0; index < greetings.length; index = index + 1) {
	console.log(greetings[index]);
}

// A slightly nicely way in javascript using a for each loop

greetings.forEach(function(element){
	console.log(element);
});

// This is a nicer way because it removes the need to maintain 
// an extra variable such as index in the previous example. 
// It's often the case that removing a variable declaration will 
// make our code less error prone. 
// 
// In addition to including the forEach function in JavaScript arrays
// have been 
// 
// Dynamically adding to an array 

var cardSuits = [];

cardSuits.push("clubs");
console.log(cardSuits);

// prints out clubs
cardSuits.push("diamonds");
console.log(cardSuits);
// prints out ["clubs", "diamonds"];