var Treasury = Actor.extend({
	init: function(id, x, y) {
		this.id = id;
		this.pebbleCount = 0;
		this.width = 100;
		this.height = 100;
		this.x = x;
		this.y = y;
		this.width = 100;
		this.height = 100;
	},
	drawDefault: function(ctx, x, y, w, h) {
		x = x + w/2;
    y = y + h/2;
    var r = (w+h)/4;

    // Circle
    ctx.circle(x, y, r, this.fillStyle, 'gold');
		ctx.font = "32px Arial";
		ctx.strokeText(this.pebbleCount, x-10, y+10);
	}
});

