// Understanding This

var person {
	firstName : "Penelope",
	lastName : "Barrymore",
	fullName: function(){
		// Notice we use "this" just as we used "he" in the
		console.log(this.firstName + " " + this.lastName);
		// We could have also written it like this 
		console.log(person.firstName + " " + person.lastName);
	}
}
/*
All functions have properties, just as objects have properties.
And when a function executes, it gets the this property - a variable
with the value of the object that invokes the function where this
is used.

The this reference ALWAYS refers to (and holds the value of)
an object -  a singular object - and it is usually used 
inside of a function or a method, although it can be 
used outside a function in the global scope. Note
that when we use strict mode, this holds the value of the
undefined in global functions and in anonymous functions
that are not bound to any object.

 */

var person = {
	firstName : "Penelope",
	lastName : "Barrymore",
	// Since the "this" keyword is used inside the showFullName
	// method below, and the showFullName method is defined on 
	// the person object,
	// "this" will have the value of ther person object because
	// the person object will invoke show full name
	showFullName: function(){
		console.log(this.firstName + " " + this.lastName);
	}
}

person.showFullName(); // returns Penelope Barrymore 

// More Advanced "this" if there is a global scope 

/*
JavaScript's Bomd Allows Us to Set the this Value on
Methods
 */

// When this button below is clicked, the text field is populated
// with a random name
// 
// <button>Get Random Person</button> <input type="text">
// 
var user = {
	data : [
	{name: "T. Woods", age:37},
	{name: "P. Mickelson", age:43},
	],

	clickHander: function(event) {
		var randomNum = ((Math.random()*2 | 0) + 1) - 1; 
		// random number between 0 and 1
		
		// This line is adding a random person from the data
		// array to the text field
		$("input").val(this.data[randomNum].name + " " + this.data[randomNum].age);
	}
}

// Assign an eventHandler to the button's click event
$('button').click(user.clickHander);
/*
Error with "this" because the clickHandler method
is bound to the button HTML element, since that is the object
that athe clickHandler() method is executed on. 
 */

// To fix the problem
$('button').click(user.clickHandler.bind(user));

// How to Curry a Function using Bind 
function greet(gender, age, name) {
	// If male, us Mr., else use Ms.
	var salutation = gender === "male" ? "Mr." : "Ms.";
	if(age > 25) {
		return "Hello," + saluation + name + ".";
	} else {return "Hey," + name + "."};
}
// And we use the bind () method to curry (preset
// one or more parameters) our greet() function. 
// The first argument of the bind() method sets
// the this value

// so we are passing a null because we are not 
// using the "this" keyword in our greet function
var greetAnAdultMale = greet.bind(null, "male", 45);

greetAnAdultMale("John Harlove"); // "Hello, Mr. John Hartlove"

var greetAYoungster = greet.bind(null, "", 16);
greetAYoungster("Alex"); // Hey Alex

greetAYoungster("Emma Wateroloo"); // "Hey, Emma Waterloo."
/*
When we use the bind() method for currying, all the parameters
of the greet() function, except the last (rightmost) argument
are present, are preset. So it is the rightmost argument
that we are changing when we call the new functions 
that were curried from the greet() function.
 */

//Using Bind to Borrow Methods 

// Here is an example of using bind to borrow a method
var cars = {
	data: [
	{name:"Honda Accord", age:14},
	{name:"BMW", age:5},
	{name:"Tesla Model S", age:2}
	]
}
// We can borrow the showData() method from the users
// object we defined in the last example
// We bind the user.showData method to the cars
// object we just created 

cars.showData = user.showData.bind(cars);
cars.showData(); // Honda Accord 14

// For browsers who do not support the bind method
// Credit to Douglas Crockford for this bind method​
            if (!Function.prototype.bind) {
                Function.prototype.bind = function (oThis) {
                    if (typeof this !== "function") {
                        // closest thing possible to the ECMAScript 5 internal IsCallable function​
                        throw new TypeError ("Function.prototype.bind - what is trying to be bound is not callable");
                    }
​
                    var aArgs = Array.prototype.slice.call (arguments, 1),
                            fToBind = this,
                            fNOP = function () {
                            },
                            fBound = function () {
                                return fToBind.apply (this instanceof fNOP && oThis
                                        ? this​
                                        : oThis,
                                        aArgs.concat (Array.prototype.slice.call (arguments)));
                            };
​
                    fNOP.prototype = this.prototype;
                    fBound.prototype = new fNOP ();
​
                    return fBound;
                };
            }