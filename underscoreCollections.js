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
	var finalArray = [];
	var isValid;
	for (i=0; i<list.length; i++) {
		for (var keyA in list[i]) {
			isValid = false;
			for (var keyB in properties) {
				if ((keyA === keyB) && (list[i][keyA] === properties[keyB])) {
					isValid = true;
				} else {
					if ((keyA === keyB) && (list[i][keyA] !== properties[keyB])) {
						isValid = false;
					}
				}
			}
		}
		if (isValid) {
			finalArray.push(list[i]);
		}
	}
	return finalArray;
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
var listOfPlays = [{title: 'Cymbeline', author: 'Shakespeare', year: 1611}, {title: 'Game of Thrones', 
	author: 'George R.R. Martin', year: 1994}, {title: 'The Tempest', author: 'Shakespeare', year: 1611}]

//*************** Instance Setups ******************

//each(testList, alert);
//map(testList2, testMulti);
//reduce([1,2,3], function(memo, num){return memo + num;}, 0);
//find(testList2, testPredicate);
//filter(testList2, testPredicate);
//where(listOfPlays, {author: 'Shakespeare', year: 1611})
//reject(testList2, testPredicate);
//contains(testList2, testValue);
//size(testList);