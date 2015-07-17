// Looping through an object
var obj = {
	id: 1,
	url: 'http://facebook.com'
}

Object.getOwnPropertyNames(obj).forEach(
	function(val, idx, array) {
		console.log(val + 'has' + formJsonObject[val]);
	});