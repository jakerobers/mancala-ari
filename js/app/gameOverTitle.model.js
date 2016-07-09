var GameOverTitle = Box.extend({
  init: function(x, y) {
    this.x = x;
    this.y = y;
  },
  drawDefault: function(ctx) {
    text = "Player 1 wins!";
    if (treasuries[PLAYER_2].pebbleCount > treasuries[PLAYER_1].pebbleCount) {
      text = "Player 2 wins!";
    }
    ctx.strokestyle = "#FF0000";
    ctx.font = "32px Arial"
    ctx.fillText(text, this.x, this.y, 300,50)
  }
})
