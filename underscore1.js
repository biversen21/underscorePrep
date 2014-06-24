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

function filter(list, predicate) {
	finalList = [];
	for (i=0; i<list.length; i++) {
		if (predicate(list[i])) {
			finalList.push(list[i]);
		}
	}
	return finalList;
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

var testList = ['hello', 2, true];
var testList2 = [1,2,3,4];
var testMulti = function(num) {
	return num * 2;
}
var testPredicate = function(num) {
	return num % 2 == 0;
}
//each(testList, alert);
//map(testList2, testMulti);
//filter(testList2, testPredicate);
//reject(testList2, testPredicate);