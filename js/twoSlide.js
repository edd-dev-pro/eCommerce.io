$(document).ready(function() {
	if (screen.width>699) {
		$(".ocul").css({opacity:0});
		for (var i=0; i<3; i++) { 
			if (i==0) {
				setTimeout(function() {
					$("#img1").css({opacity:1}); 
				}, 12000);
			} else if(i==1) {
				setTimeout(function() {
					$("#img2").css({opacity:1});
				}, 19500);
			} else if(i==2){
				setTimeout(function() {
					$("#img3").css({opacity:1});
				}, 26500);
			}
		}
	} else if (screen.width<699) {
		$(".ocul").css({opacity:0});
		$("#audio").removeAttr("controls");
	}
});
function mos() {
	var	val = new Audio ();
		val.src = 'media/Slide 03.mp3';
		val.loop = false;
		val.play();
	if (val.play) {
		for (var i=0; i<3; i++) { 
			if (i==0) {
				setTimeout(function() {
					$("#img1").css({opacity:1}); 
				}, 12000);
			} else if(i==1) {
				setTimeout(function() {
					$("#img2").css({opacity:1});
				}, 19500);
			} else if(i==2){
				setTimeout(function() {
					$("#img3").css({opacity:1});
				}, 26500);
			}
		}
	}
}