// Loop until get input "quit"

var userInput;
var todoList = [];

while(true) {
	userInput = prompt("What would you like to do ?");

	if(userInput === "new") {
		userInput = prompt("Enter a new todo");
		todoList.push(userInput);
	} else if (userInput === "list") {
		todoList();
	} else if (userInput === "quit") {
		break;
	} else if (userInput === "delete") {
		deleteTodo();
	}
}

console.log("You quit App!");

function todoList() {
	//**********
	// index : todo
	//**********
	// use For Loop
	// console.log("*************");
	// for(var i = 0; i < todoList.length; i++) {
	// 	console.log(i + " : " + todoList[i]);
	// }
	// console.log("*************");

	// use forEach
	console.log("*************");
	todoList.forEach(function(todo, index){
		console.log(index + " : " + todo);
	});
	console.log("*************");
}

function deleteTodo() {
	userInput = prompt("Enter specific index of todo");
	todoList.splice(userInput, 1);
	console.log("Todo Removed");
}