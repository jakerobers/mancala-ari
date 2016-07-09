var TurnTitle = Box.extend({
	init: function(x, y) {
		this.x = x;
		this.y = y;
	},
	drawDefault: function(ctx) {
		text = "Player " + (turn+1) + " turn";
		ctx.strokestyle = "#FF0000";
		ctx.font = "32px Arial"
		ctx.fillText(text, this.x, this.y, 300,50)
	}
})
