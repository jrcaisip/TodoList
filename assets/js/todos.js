//Check Off Specific Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", ".delete", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var todoText = $(this).val();
		$("ul").append("<li> <span class=\"delete\"><i class=\"far fa-trash-alt\"></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});