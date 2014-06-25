function first(array, n) {
	if (n) {
		for (i=0; i<n; i++) {
			return array.shift();
		}
	} else {
		return array.shift();
	}
}

function initial(array, n) {
	if (n) {
		for (i=0; i<n; i++) {
			array.pop()
		}
	} else {
	array.pop();
	}
	return array;
}

function last(array, n) {
	if (n) {
		for (i=0; i<n; i++) {
			return array.pop();
		}
	} else {
		return array.pop();
	}
}

function rest(array, index) {
	
}

function compact(array) {
	
}

function flatten(array, shallow) {
	
}

function without(array, values) {
	
}

function partition(array, predicate) {
	
}

function union(arrays) {
	
}

function intersection(arrays) {
	
}

function difference(array, others) {
	
}

function uniq(array, isSorted, iterator) {
	
}

function zip(arrays) {
	
}

function object(list, values) {
	
}

function indexOf(array, value, isSorted) {
	
}

function lastIndexOf(array, value, fromIndex) {
	
}

function sortedIndex(list, value, iterator, context) {
	
}

function range(start, stop, step) {
	
}

//******************* Variable Setup ***********************

var testArray = [1,2,3,4,5]

//******************* Instance Setup ***********************

//first(testArray, 4);
initial(testArray, 3);