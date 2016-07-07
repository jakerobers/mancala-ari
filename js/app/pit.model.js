var Pit = Actor.extend({
	init: function(id, side, x, y) {
		this.id = id;
		this.side = side;
		this.width = 50;
		this.height = 50;
		this.x = x;
		this.y = y;
		this.pebbleCount = 4;
	},
	drawDefault: function(ctx, x, y, w, h) {
		x = x + w/2;
    y = y + h/2;
    var r = (w+h)/4;

    // Circle
    ctx.circle(x, y, r, this.fillStyle, 'black');
		ctx.font = "48px serif";
		ctx.strokeText(this.pebbleCount, x-r+12, y+r-10)
	}
});
