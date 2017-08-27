//set max number
var maxScoreForSetting = document.querySelector("#maxScoreForSetting");
var maxScoreHtml = document.querySelector("#maxScore");
var maxScore = 5;

maxScoreForSetting.addEventListener("change", function() {
	maxScore = maxScoreForSetting.value;
	maxScoreHtml.textContent = maxScore;
});

//add one score to player one until maxScore
//add one score to player two until maxScore
var playerOneScoreHtml = document.querySelector("#playerOneScore");
var addButtonForOne = document.querySelector("#addButtonForOne");
var playerOneScore = 0;

var playerTwoScoreHtml = document.querySelector("#playerTwoScore");
var addButtonForTwo = document.querySelector("#addButtonForTwo");
var playerTwoScore = 0;


addButtonForOne.addEventListener("click", function() {
	playerOneScore += 1;
	if(playerOneScore >= maxScore) {
		addButtonForOne.disabled = true;
		addButtonForTwo.disabled = true;
		playerOneScoreHtml.classList.add("pink");
	}
	playerOneScoreHtml.textContent = playerOneScore;
});

addButtonForTwo.addEventListener("click", function() {
	playerTwoScore += 1;
	if(playerTwoScore >= maxScore) {
		addButtonForOne.disabled = true;
		addButtonForTwo.disabled = true;
		playerTwoScoreHtml.classList.add("pink");
	}
	playerTwoScoreHtml.textContent = playerTwoScore;
});

//reset all score

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
	window.location.reload(true);
});