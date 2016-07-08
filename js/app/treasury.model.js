var Treasury = Actor.extend({
	init: function(id, x, y) {
		this.id = id;
		this.pebbleCount = 0;
		this.width = 100;
		this.height = 100;
		this.x = x;
		this.y = y;
	},
	drawDefault: function(ctx, x, y, w, h) {
		
	}
});
