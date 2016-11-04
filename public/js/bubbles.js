var topicStartHeight = 300;
var subtopicStartHeight = 100;
var topicSizeDivider = 50;
var subtopicSizeDivider = 100;
var clickSizeModifier = 20;
var popSize = 10000;

function pop(){
	alert("This issue has popped!  Your support has been sent to the following places: ")
}

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
		var badge = $(this).find(".badge");
		badgeCount = parseInt(badge.text(), 10) + 1;
		badge.text(badgeCount);

		if($(this).hasClass("important")){
			clickSizeModifier = clickSizeModifier;
			if(badgeCount >= popSize){
				pop();
			}
		} else if($(this).hasClass("unimportant")){
			clickSizeModifier = -1 * clickSizeModifier;
		} else{
			clickSizeModifier = 0;
		}
		var bubble = $(this).closest(".topic");
		var newCirc = parseInt(bubble.css("width"), 10) + clickSizeModifier;
		bubble.css({ 'height': newCirc + "px", 'width': newCirc + "px"});
	});

});