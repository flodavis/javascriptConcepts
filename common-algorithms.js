// A classic Example using Factorial 
// 
function factorial(n) {
	if (n == 0) {
		return 1;
	} else{
		return (n * factorial(n -1));
	} 
}

console.log(factorial(5));

// Algorithm to check whether it's a leap year or not 
// 
function checkLeapYear(year) {
	if ( (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
		console.log(year + ' is a leap');
		return true;
	} else {
		alert (year + ' is not a Leap year');
		return false;
	}
}
console.log(checkLeapYear(2012));
console.log(checkLeapYear(2013));

//Min - Max Algorithm 
// Determing the lowest and highest values of the given set
var tab = new Array(16, 9, 86, 59,2 78,240, 18);
//default

var min = tab[0];
var max = tab[0];

for(var i = 0; i <tab.length; i++){
	if (min > tab[i]) {
		min = tab[i];
	}

	if (max < tab[i]) {
		max = tab[i];
	}
}

console.log("Min = " + min + ", Max = " + max);
//var min
//

//Random String 
//The algorithm is a simple generator for a random string 

var _list = 'abcdefghijklmopqrstuvwxyz0123456789';

function randomString(long) {
	var tmp = '';
	i = 0;
	var length = _list.length;

	for( i = 0; i < long; i++){
		tmp += _list.charAt(Math.floor(Math.random() * length));
	}

	return tmp;
}

console.log(randomString(8));

// Binary Search is based on divide and conquer, a simple but 
// optimal way to find the value in large input lists
inputList = new Array();
inputList[0] = 'E';
inputList[1] = 'I';
inputList[2] = 'O';
inputList[3] = 'P';
inputList[4] = 'Q';
inputList[5] = 'R';
inputList[6] = 'T';
inputList[7] = 'U';
inputList[8] = 'W';
inputList[9] = 'Y';

function binarySearch(inputList, key) {
	var left = 0;
	var right = inputList.length - 1;

	while (left <= right) {
		var mid = parseInt((left + right) / 2);

			if (inputList[mid] == key) {
				return mid;
			}

			else if (inputList[mid] < key) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
			return 'Not Found';
	}
}

console.log(binarySearch(inputList, 'T'));
console.log(binarySearch(inputList, 'Z')); // Not found

// Data Structures in JavaScript LIFO 
// Last In First Out 

function ourStack() {
	var stack = new Array();
	stack.push('Audi');
	stack.push('BMW');
	stack.push('Lexus');
	stack.push('Ford');

	// In this case Ford is at the top of the stack
	// it was added last
	
	console.log(stack.toString());
	stack.pop(); // Get Ford
	console.log(stack.toString()); // Ford gone bye bye

	// add new element
	stack.push('Mercedes');
	console.log(stack.toString()); // Mercedes on Top
}
ourStack();