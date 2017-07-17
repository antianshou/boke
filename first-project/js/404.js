window.onload = function() {
	var div = document.getElementsByClassName('display_html')[0];
	var div1 = document.getElementsByClassName('text')[0];
	var btn = document.getElementsByTagName('button')[0];
	div.style.width = window.innerWidth + 'px';
	div.style.height = window.innerHeight + 'px';
	btn.style.top = window.innerHeight * 0.57 + 'px';
	div1.style.top = window.innerHeight * 0.48 + 'px';
	window.onresize = function() {
		div.style.width = window.innerWidth + 'px';
		div.style.height = window.innerHeight + 'px';
		btn.style.top = window.innerHeight * 0.57 + 'px';
		div1.style.top = window.innerHeight * 0.48 + 'px';
	}
}