// Print out the first 100 numbers using a loop
// 
var num;

// print 101 numbers starting with 0

for (num = 0; num <= 100; num = num + 1) {
	console.log(num);
}

// Here is the same for loop annotated to print out the 
// the even numbers less than 100 

var i;
// initializations: i gets set to 0
// continuation: keep going as long as i is smaller than 100
// update: add 2 to i
// body: print out i
// in other words, print out only the even numbers starting with
// 0 

for (i = 0; i < 100; i = i + 2) {
	console.log(i);
}

// initialization i gets set to 0
// continuation: keep going as long as i is smaller than 100
// body: print out only if the remainder when dividing i by 2 is 0
// print out only the even numbers starting with 0 and ending with 98

for (i = 0; i < 100; i = i + 1) {
	if (i%2 === 0) {
		console.log(i);
	}
}
/*
In the second example, we use the modulous operator also know 
as the remainder operator, which yields the remainder from integer
division. In other words, 5%2 evaluates to 1 because 5/2 is 2
with a remainder of 1. In the example, we're using this operator
to check for divisibility by 2 (which tells us the number is even).
Even though this operator may seem esoteric, it's actually extremely
useful. In fact, it's so useful for experienced programmers that questions
involving it are often asked at job interviews
 */