// Write a function isEven() which takes a single numeric argument
// and returns true if the number is even, and false otherwise

function isEven(num) {
	if(num % 2 ===0) {
		return true;
	}
	return false;
	// best solution is just return "num % 2 === 0" 
}



// Write a function factorial() which takes a single numeric argument
// and returns the factorial of that number

function factorial(num) {
	var result = 1;
	if(num > 0) {
		return num * factorial(num - 1);
	}
	return 1;
}

// write a function kebabToSnake() which takes a single kebab-cased
// string argument and returns the snake_cased version

function kebabToSnake(str) {
	return str.replace("-", "_");
}