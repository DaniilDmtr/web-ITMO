let string = "Фраза для теста";
document.write(string, "</br>");
document.write("Количество слов = ", string.split(" ").length, "</br>");
document.write("Количество букв = ", string.length - string.split(" ").length + 1, "</br>");
document.write("URL = ", document.location.href, "</br>");
document.write("Protocol = ", document.location.protocol, "</br>");
document.write("Name = ", document.location.pathname.split(".")[0], "</br>");
document.write("Extention = ", document.location.pathname.split(".")[1], "</br>");
let Parametrs = window.location.search.replace( '?', '');
document.write("Substring parametrs:", Parametrs, "</br>");
let count = 0;
links = document.getElementsByTagName("a");
for (i = 0; i < links.length; i++) {
	if (links[i].getAttribute('href')[0] == "#") {
		count++;
	}
}
document.write("Anchors = ", count, "</br>");
document.write("Links = ", links.length, "</br>");
for (i = 0; i < links.length; i++) {
	if (links[i].getAttribute('href')[0] == "#") {
		document.write("First anchor = ", links[i].innerHTML, "</br>");
		break;
	}
}
images = document.getElementsByTagName("img");
document.write("Images = ", images.length, "</br>");
document.write("Width first img = ", images[0].getAttribute('width'), "</br>");
let maxWidth = 0;
for (i = 0; i < images.length; i++) {
	if (maxWidth < +images[i].getAttribute('width')) {
		maxWidth = +images[i].getAttribute('width');
	}
}
document.write("Max width = ", maxWidth, "</br>");
let imagesHeightAdd = 0;
for (i = 0; i < images.length; i++) {
	imagesHeightAdd += +images[i].getAttribute('height');
}
document.write("imagesHeightAdd = ", imagesHeightAdd, "</br>");
forms = document.getElementsByTagName("form");
function onClickButton(j) {
	alert (forms[j].getAttribute('id'));
	return false;
}

function formID (j) {
	alert (forms[j].getAttribute('id'));
	return false;
}
function reset (j) {
	forms[j].reset();
}
function quantityInputs(j) {
	let qInputs = 0;
	for (i = 0; i < forms[j].childNodes.length; i++) {
		if (forms[j].childNodes[i].tagName == "INPUT") {
			qInputs++;
		}
	}
	alert (qInputs);
	return false;
}

