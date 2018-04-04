var buttons = document.getElementsByClassName('button');
for ( var i = 0; i < buttons.length; i++) {
	alert(buttons[i].innerHTML); // innerTEXT nie dziala
}
console.log(buttons);