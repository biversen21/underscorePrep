function each(list, iterator){
	for (i=0; i<list.length; i++) {
		iterator(list[i]);
		console.log(list[i]);
	}
}

function map(list){
	
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

var testList = ['hello', 2, true];
var testList2 = [1,2,3,4];
var testPredicate = function(num) {
	return num % 2 == 0;
}
//each(testList, alert);
filter()