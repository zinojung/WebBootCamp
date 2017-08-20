// Print all numbers between - 10 and 10
console.log("Print all numbers between - 10 and 10");
var num = 10;
while(num < 20) {
	console.log(num);
	num++;
}

// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
num = 10;
while(num < 41) {
	if(num % 2 === 0) {
		console.log(num);
	}
	num++;
}

// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
num = 300;
while(num < 334) {
	if(num % 2 === 1) {
		console.log(num);
	}
	num++;
}

// Print all numbers divisible by 3 AND 5 and 50
console.log("Print all numbers divisible by 3 AND 5 and 50");
num = 0;
while(num < 101) {
	if( (num % 3 === 0) && (num % 5 ===0) && (num % 50 ===0) ) {
		console.log(num);
	}
	num++;
}