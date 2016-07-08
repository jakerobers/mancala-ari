var TurnTitle = Box.extend({
	init: function(x, y) {
		this.x = x;
		this.y = y;
	},
	drawDefault: function(ctx) {
		text = "Player " + (turn+1) + " turn";

		ctx.font = "16px serif"
		ctx.strokeText(text, this.x, this.y, 200, 50)
	}
})
