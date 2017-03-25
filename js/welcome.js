var eastOpacity = 0;
var timer =0.01;

function cycleImages(){
	$('#lark').css('opacity', 1-eastOpacity-timer);
	$('#east').css('opacity', eastOpacity+timer);
	
	eastOpacity=eastOpacity+timer;

	if (eastOpacity<0) {
		timer= -timer;
	}
	if (eastOpacity>1) {
		timer= -timer;
	}

	if (eastOpacity<0.5) {
		$('.shift-link').attr('href',"lark1.html");
	} else {
		$('.shift-link').attr('href',"east1.html");
	}
	
}

$(document).ready(function(){

// run every 0.5s
setInterval('cycleImages()', 50);

});
