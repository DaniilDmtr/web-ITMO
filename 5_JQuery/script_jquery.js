$(".first_task").css("fontWeight", "bold");
$(".second_task").css("color", "red");
$(".third_task").css("fontSize", "25px");
$(document).ready(function(){
	$("input").attr("disabled", "disabled");
});
$("a").prepend("↗");
$("a").attr("target", "_blank");


function reloadPage() {
	let p = document.createElement("p");
	$(p).load("https://inxaoc.github.io/example/ajax-1.html");
	document.body.appendChild(p);
}

$("table").css("border", "3px solid lightgreen");
$("td").css("border", "2px dashed lightgreen");
$(".btnInTable").css("width", "100%")
$(".prgInTable").css("fontWeight", "bold");
$(".prgInTable").css("fontSize", "15px");

function toggle(i) {
	$(".prgInTable").eq(i).toggle(1000);
}

function fadeToggle(i) {
	$(".prgInTable").eq(i).fadeToggle(1000);
}

function animateFont(i) {
	$(".prgInTable").eq(i).animate({fontSize: "25px"});
	$(".prgInTable").eq(i).animate({fontSize: "15px"});
}

function slideToggle(i) {
	$(".prgInTable").eq(i).slideToggle(1000);
}

function opacityAnimation(i) {
	$(".prgInTable").eq(i).animate({opacity: "0"}, 1000);
	$(".prgInTable").eq(i).animate({opacity: "1"}, 1000);
}


