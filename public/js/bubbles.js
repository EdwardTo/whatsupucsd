var topicStartHeight = 300;
var subtopicStartHeight = 100;
var topicSizeDivider = 50;
var subtopicSizeDivider = 100;

$(document).ready(function(){
	
	//Vary bubble circumference by nYesses
	$(".topic").each(function( i ) {
		var topicCirc = (topicStartHeight + (parseInt($(this).find(".title .badge").text(), 10) / topicSizeDivider ));
		$(this).css({ 'height': topicCirc + "px", 'width': topicCirc + "px" });
		//Resize subtopic bubbles
		$(this).find(".subtopic").each(function( j ){
			var subtopicCirc = (subtopicStartHeight + (parseInt($(this).find(".badge").text(), 10) / subtopicSizeDivider ));
			$(this).css({ 'height': subtopicCirc + "px", 'width': subtopicCirc + "px" });
		});
	});

	$("addYes").click(function(){
	});

});