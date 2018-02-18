$(document).ready(function() {
	if (screen.width>699) {
		$(".ocul").hide();
		for (var i=0; i<5; i++) {
			if (i==0) {
				setTimeout(function() {
					$("#img1").fadeIn(1000);
				}, 6000);
			} else if(i==1) {
				setTimeout(function() {
					$("#img2").fadeIn(1000);
				}, 10000);
			} else if(i==2){
				setTimeout(function() {
					$("#img3").fadeIn(1000);
				}, 12500);
			} else if(i==3){
				setTimeout(function() {
					$("#img4").fadeIn(1000);
				}, 15000);
			} else if(i==4){
				setTimeout(function() {
					$("#img5").fadeIn(1000);
				}, 17000);
			}
		}
	} else if (screen.width<699) {
		$(".ocul").hide();
		$("#audio").removeAttr("controls");
	}
});
function mos() {
	var	val = new Audio ();
		val.src = 'media/Slide 02.mp3';
		val.loop = false;
		val.play();
	if (val.play) {
		for (var i=0; i<5; i++) {
			if (i==0) {
				setTimeout(function() {
					$("#img1").fadeIn(1000);
				}, 6000);
			} else if(i==1) {
				setTimeout(function() {
					$("#img2").fadeIn(1000);
				}, 10000);
			} else if(i==2){
				setTimeout(function() {
					$("#img3").fadeIn(1000);
				}, 12500);
			} else if(i==3){
				setTimeout(function() {
					$("#img4").fadeIn(1000);
				}, 15000);
			} else if(i==4){
				setTimeout(function() {
					$("#img5").fadeIn(1000);
				}, 17000);
			}
		}
	}
}