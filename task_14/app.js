var userAnswer = "first";

while(true) {
	userAnswer = prompt("Are we there yet?");
	if(userAnswer === "yes" || userAnswer ==="yeah" || userAnswer.search("yes") > 0) {
		alert("Yay, we finally made it!");
		break;
	}
}