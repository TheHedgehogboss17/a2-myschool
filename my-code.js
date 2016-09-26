$(document).ready(function(){
	
	$("p").hide();
	$("#topPicture").hide();
	$("topPitcure").click(function(){
 	$(this).next().fadeToggle(1000);	
	});
});
	/* this is jq - button selectors */
	$("#testbutton").click(function(){
	/*$("#jq02").css("background-color","#FF0000")*/
	$("#strong, #testbutton").css("background-color","#FF0000");	
	});
	$(document).ready(function() {
	
	$("p").hide();
	$("#topPicture").hide();
	
	$("h1").click(function() {

		$(this).next().fadeToggle(1000);

	});
	
	/* start of jq02 how to use buttons and selectors */
	
	$("#testbutton").click(function() {
		
		/* $("#jq02").css("background-color","#FF0000"); */
		
		$("strong").css("background-color","#FF0000");
		
	});

});

