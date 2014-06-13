function each(list, iterator){
	for (i=0; i<list.length; i++) {
		iterator(list[i]);
		console.log(list[i]);
	}
}

var testList = ['hello', 2, true];
each(testList, alert);