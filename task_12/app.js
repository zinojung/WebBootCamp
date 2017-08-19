var age = prompt("How old are you?");

if(age < 0) {
	alert("That's not possible");
} else if (age == 21) {
	alert("happy 21st birthday!!");
} else if (age % 2 == 1) {
	alert("Your age is odd!");
} else if (Number.isInteger(Math.sqrt(age))) {
	alert("Perfect square!");
}