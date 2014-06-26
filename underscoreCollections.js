function each(list, iterator, context){
	for (i=0; i<list.length; i++) {
		iterator(list[i]);
		console.log(list[i]);
	}
}

function map(list, iterator, context){
	finalList = [];
	for (i=0; i<list.length; i++) {
		finalList.push(iterator(list[i]));
	}
	return finalList;
}

function reduce(list, iterator, memo, context) {
	for(i=0; i<list.length; i++) {
		memo = iterator(memo, list[i]);
	}
	return memo;
}

function reduceRight(list, iterator, memo, context) {
	
}

function find(list, predicate, context) {
	for (i=0; i<list.length; i++) {
		if (predicate(list[i])) {
			return list[i];
		}
	}
}

function filter(list, predicate, context) {
	finalList = [];
	for (i=0; i<list.length; i++) {
		if (predicate(list[i])) {
			finalList.push(list[i]);
		}
	}
	return finalList;
}

function where(list, properties) {
	
}

function findWhere(list, properties) {
	
}

function reject(list, predicate, context) {
	finalList = [];
	for (i=0; i<list.length; i++) {
		if (!predicate(list[i])) {
			finalList.push(list[i]);
		}
	}
	return finalList;
}

function every(list, predicate, context) {
	
}

function some(list, predicate, context) {
	
}

function contains(list, value) {
	for (i=0; i<list.length; i++) {
		if ((list[i]) === value) {
			return true;
		}
	}
	return false;
}

function invoke(list, methodName, arguments) {
	
}

function pluck(list, propertyName) {
	
}

function max(list, iterator, context) {
	
}

function min(list, iterator, context) {
	
}

function sortBy(list, iterator, context) {
	
}

function groupBy(list, iterator, context) {
	
}

function indexBy(list, iterator, context) {
	
}

function countBy(list, iterator, context) {
	
}

function shuffle(list) {
	
}

function sample(list, n) {
	
}

function toArray(list) {
	
}

function size(list) {
	console.log(list.length);
	return list.length;
}


//*************** Variable Setups ******************

var testList = ['hello', 2, true];
var testList2 = [1,2,3,4];
var testValue = 5;
var testMulti = function(num) {
	return num * 2;
}
var testPredicate = function(num) {
	return num % 2 == 0;
}

//*************** Instance Setups ******************

//each(testList, alert);
//map(testList2, testMulti);
//reduce([1,2,3], function(memo, num){return memo + num;}, 0);
//find(testList2, testPredicate);
//filter(testList2, testPredicate);
//reject(testList2, testPredicate);
//contains(testList2, testValue);
//size(testList);