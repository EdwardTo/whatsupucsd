var startHeight = 300;
var sizeDivider = 50;

$(document).ready(function(){
	

	$(".topic").each(function( index ) {
		var bubbleCirc = (startHeight + (parseInt($(this).find(".title .badge").text(), 10) / sizeDivider ));
		$(this).css({ 'height': bubbleCirc + "px", 'width': bubbleCirc + "px" });
	});

	$("addYes").click(function(){
	});

});