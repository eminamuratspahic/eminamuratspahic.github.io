//Funktion som hämtar och ritar upp canvasobjektet från index.html
window.onload = function() {
	var canvas = document.getElementById("myCanvas");
	canvas.addEventListener('keydown', moveIt, true);
	var x = 100;
	var y = 100;
	var width = 30;
	var height = 30;
	ctx = canvas.getContext("2d");
	ctx.fillRect(x, y, width, height);

  //Begränsar så att objektet inte kan röra sig utanför canvas
	var minXY = 0;
	var maxX = 570;
	var maxY = 270;

  //skapar variabler för tangenterna åt vilket håll det ska röra sig
	var left = 37;
	var up = 38;
	var right = 39;
	var down = 40;
  
  //Funktion som gör att objeketet flyttar på sig när man trycker på tangenterna
	function moveIt(e) {
		if (e.keyCode == left && x > minXY) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			x = x - 10;
			ctx.fillRect(x, y, width, height);
		} else if (e.keyCode == up && y > minXY) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			y = y - 10;
			ctx.fillRect(x, y, width, height);
		} else if (e.keyCode == right && x < maxX) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			x = x + 10;
			ctx.fillRect(x, y, width, height);
		} else if (e.keyCode == down && y < maxY) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			y = y + 10;
			ctx.fillRect(x, y, width, height);
		}
	}
}