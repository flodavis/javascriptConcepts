/*
Closures are critical to successful application development.

In a nutshell, a closure stores function state, even after the function
has returned. To create a closure, simply define a function inside another function
return it or pass it to another function. The inner function will have
access to the variables declared in the outer function. This technique
is commonly used to give objects data privacy.

Because the closure variables in the outer function are only in scope
within the containing function, you can't get at the data except through
its priveledged methods. In other languages, a priveledged method is 
an exposed method that has access to privat data.

In javascript, any exposed method defined within the closure scope is 
priveledged
 */

var o = function o (){
	var data = 1;
	get;

	get = function get(){
		return data;
	};

	return {
		get: get
	};
};

test('Closure for object privacy.', function (){
	var obj = o(); // Get an object with the .get() method.

	try {
		ok(data, 'This throws an error.');
	} catch(e) {
		ok(true, "The data var is only available" + "To priveledged methods")''
	}

	equal(
		obj.get(), 1, 
		'.get() should have access to the closure'
		);
});