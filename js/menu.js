$(document).ready(function () {
	$("#menu").hide();
	$("#ope").click(function() {	
		$("#menu").toggle(1000);
	});
	$("#clo").click(function () {
		$("#menu").hide(1000);
	});
});