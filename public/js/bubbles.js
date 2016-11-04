var topicStartHeight = 300;
var subtopicStartHeight = 100;
var topicSizeDivider = 50;
var subtopicSizeDivider = 100;
var yesSizeModifier = 20;

$(document).ready(function(){
	
	//Vary bubble circumference by nYesses
	$(".topic").each(function( i ) {
		var topicCirc = (topicStartHeight + (parseInt($(this).find(".title .modifier.important").text(), 10) / topicSizeDivider ));
		$(this).css({ 'height': topicCirc + "px", 'width': topicCirc + "px" });
		//Resize subtopic bubbles
		$(this).find(".subtopic").each(function( j ){
			var subtopicCirc = (subtopicStartHeight + (parseInt($(this).find(".badge").text(), 10) / subtopicSizeDivider ));
			$(this).css({ 'height': subtopicCirc + "px", 'width': subtopicCirc + "px" });
		});
	});

	$(".modifier").click(function(){
		var bubble = $(this).closest(".topic");
		var newCirc = parseInt(bubble.css("width"), 10) + yesSizeModifier;
		bubble.css({ 'height': newCirc + "px", 'width': newCirc + "px"});

		var badge = $(this).find(".badge");
		badge.text(parseInt(badge.text(), 10) + 1);
	});

});