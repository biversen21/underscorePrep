function keys(object) {
	var newArr = [];
	for (var key in object) {
		newArr.push(key);
	}
	return newArr;
}

function values(object) {
	var newArr = [];
	for (var key in object) {
		newArr.push(object[key]);
	}
	return newArr;
}

function pairs(object) {
	var newArr = [];
	for (var key in object) {
		var secondArr = [];
		secondArr.push(key);
		secondArr.push(object[key]);
		newArr.push(secondArr);
	}
	return newArr;
}

function invert(object) {
	
}

function functions(object) {
	
}

function extend(object) {
	
}

function pick(object, keys) {
	
}

function omit(object, keys) {
	
}

function defaults(object, defaults) {
	
}

function clone(object) {
	
}

function tap(object, interceptor) {
	
}

function has(object, key) {
	for (var keyb in object) {
		if (key === keyb) {
			return true;
		}
	}
	return false;
}

function property(key) {
	
}

function matches(attrs) {
	
}

function isEqual(object, other) {
	
}

function isEmpty(object) {
	
}

function isElement(object) {
	
}

function isArray(object) {
	
}

function isObject(value) {
	
}

function isArguments(object) {
	
}

function isFunction(object) {
	
}

function isString(object) {
	
}

function isNumber(object) {
	
}

function isFinite(object) {
	
}

function isBoolean(object) {
	
}

function isDate(object) {
	
}

function isRegExp(object) {
	
}

function isNaN(object) {
	
}

function isNull(object) {
	
}

function isUndefined(value) {
	
}

// ************* Variable Declarations **************

var testObject = {one: 1, two: 2, three: 3};
var testObject2 = {a: 1, b: 2, c: 3};

// ************* Instances **************************

//keys(testObject);
//values(testObject);
//pairs(testObject);
//has(testObject2, "f");