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
	if (index) {
		console.log(array.slice(index));
		return array.slice(index);
	} else {
		array.shift();
		console.log(array);
		return array;
	}
}

function compact(array) {
	var newArr = [];
	for (i=0; i<array.length; i++) {
		if (array[i]) {
			console.log(array[i]);
			newArr.push(array[i]);
		} 
	}
	return newArr;
}

function flatten(array, shallow) {
	
}

function without(array, values) {
	var newArr = [];
	for (i = 0; i<array.length; i++) {
		var valid = true;
		for (j = 1; j<arguments.length; j++) {
			if (array[i] === arguments[j]) {
				valid = false;
			}
		}
		if (valid) {
			newArr.push(array[i]);
		}
	}
	return newArr;
}

function partition(array, predicate) {
	var part1 = [];
	var part2 = [];
	for (i=0; i<array.length; i++) {
		if (predicate(array[i])) {
			part1.push(array[i]);
		} else {
			part2.push(array[i]);
		}
	}
	return (part1, part2);
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

var testArray = [1,2,3,4,5];
var testArray2 = [0, 1, false, 2, '', 3];
function isOdd(test) {
	if (test % 2 !=0) {
		return true;
	}
}

//******************* Instance Setup ***********************

//first(testArray, 4);
//initial(testArray, 3);
//rest(testArray, 3);
//compact(testArray2);
//without(testArray, 1, 2, 3);
//partition(testArray, isOdd);