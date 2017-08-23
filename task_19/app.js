var movies = [
	{
		title: "In Bruges",
		rating: "5 stars",
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: "4.5 stars",
		hasWatched: false
	},
	{
		title: "Mad Max Fury Road",
		rating: "5 stars",
		hasWatched: true
	},	
	{
		title: "Les Miserables",
		rating: "3.5 stars",
		hasWatched: false
	}
];

movies.forEach(function(movie){
	var hasWatched;
	if(movie.hasWatched === true) {
		hasWatched = "watched"
	} else {
		hasWatched = "not seen"
	}
	console.log("You have " + hasWatched + " \"" + movie.title + "\" - " + movie.rating);
	// console.log("You have " + movie.hasWatched + " \"" + movie.title + "\" - " + movie.rating);
});