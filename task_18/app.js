// printReverse([1,2,3,4]);
// 4
// 3
// 2
// 1

function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

// isUniform([1,1,1,1]);   true
// isUniform([2,1,1,1]);   false
// isUniform(["a", "b", "p"]); false
// isUniform(["a","a"]); true

function isUniform(arr) {
	var temp = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(temp !== arr[i]) {
			return false;
		}
	}
	return true;
}

// sumArray()
// sumArray([1,2,3]); = 6

function sumArray(arr) {
	var result = 0;
	arr.forEach(function(element) {
		result += element;
	});
	return result;
}

// max()
// max([1,2,3]); = 3

function max(arr) {
	var max = arr[0];
	arr.forEach(function(element) {
		if(max < element) max = element;
	});
	return max;
}