$('ul').on("click", "li", function(){
	$(this).toggleClass("done");
});

$('ul').on("click", ".delete", function(e) {
	$(this).parent().fadeOut(500, function() {
			$(this).remove();
	});
	e.stopPropagation();
});

$("#newTodo").keypress(function(e){
	if(e.which === 13) {
		var todo = $(this).val();
		$(this).val("");
		$('#todoList').append("<li><span class='delete'><i class='fa fa-trash-o' aria-hidden='true'></i></span><span class='content'>" + todo + "</span></li>");
		// $('#todoList .content').last().on("click", function(){
		// 	$(this).toggleClass("done");
		// });
		// $('.delete').last().click(function() {
		// 	$(this).parent().fadeOut(500, function() {
		// 		$(this).remove();
		// 	});
		// });
	}
});

$('#plus').on("click", function(){
	$('#newTodo').slideToggle(500);
});

