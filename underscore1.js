function each(list, iterator){
	for (i=0; i<list.length; i++) {
		iterator(list[i]);
		console.log(list[i]);
	}
}

function map(list, iterator){
	finalList = [];
	for (i=0; i<list.length; i++) {
		finalList.push(iterator(list[i]));
	}
	return finalList;
}

function reduce(list, iterator, memo) {
	
}

function reduceRight(list, iterator, memo) {
	
}

function find(list, predicate) {
	for (i=0; i<list.length; i++) {
		if (predicate(list[i])) {
			return list[i];
		}
	}
}

function filter(list, predicate) {
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

function reject(list, predicate) {
	finalList = [];
	for (i=0; i<list.length; i++) {
		if (!predicate(list[i])) {
			finalList.push(list[i]);
		}
	}
	return finalList;
}

function every(list, predicate) {
	
}

function some(list, predicate) {
	
}

function contains(list, value) {
	for (i=0; i<list.length; i++) {
		if ((list[i]) === value) {
			return true;
		}
	}
	return false;
}


//*************** Variable/Instance Setups ******************

var testList = ['hello', 2, true];
var testList2 = [1,2,3,4];
var testValue = 5;
var testMulti = function(num) {
	return num * 2;
}
var testPredicate = function(num) {
	return num % 2 == 0;
}
//each(testList, alert);
//map(testList2, testMulti);
//find(testList2, testPredicate);
//filter(testList2, testPredicate);
//reject(testList2, testPredicate);
//contains(testList2, testValue);