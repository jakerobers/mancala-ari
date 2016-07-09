var Pit = Actor.extend({
	init: function(id, side, x, y) {
		this.id = id;
		this.side = side;
		this.width = 50;
		this.height = 50;
		this.x = x;
		this.y = y;
		this.pebbleCount = 4;


		this.listen('mousedown.select touchstart.select', function(event) {
			if (gameIsOver) {
				return;
			}

			if (turn == this.side) {
				var results = distributePebbles(this.id);

				if (!results.goesAgain) {
					steal(results.endingPit.id);
					toggleTurn();
				}
				if (gameOver()) {
					gameIsOver = true;
			  }
			}
		});
	},
	drawDefault: function(ctx, x, y, w, h) {
		x = x + w/2;
    y = y + h/2;
    var r = (w+h)/4;

    // Circle
    ctx.circle(x, y, r, this.fillStyle, 'white');
		ctx.font = "32px Arial";
		ctx.fillStyle = "white"
		ctx.fillText(this.pebbleCount, x-r+15, y+r-13)
	}
});

