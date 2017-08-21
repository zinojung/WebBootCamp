// Loop until get input "quit"

var userInput;
var todoList = [];

while(true) {
	userInput = prompt("What would you like to do ?");

	if(userInput === "new") {
		userInput = prompt("Enter a new todo");
		todoList.push(userInput);
	} else if (userInput === "list") {
		console.log(todoList);
	} else if (userInput === "quit") {
		break;
	}
}