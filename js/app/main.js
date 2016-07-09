/**
 * Keys used for various directions.
 *
 * The property names of this object indicate actions, and the values are lists
 * of keyboard keys or key combinations that will invoke these actions. Valid
 * keys include anything that {@link jQuery.hotkeys} accepts. The up, down,
 * left, and right properties are required if the `keys` variable exists; if
 * you don't want to use them, just set them to an empty array. {@link Actor}s
 * can have their own {@link Actor#keys keys} which will override the global
 * set.
 */
var keys = {
  up: ['up', 'w'],
  down: ['down', 's'],
  left: ['left', 'a'],
  right: ['right', 'd'],
  go: ['space', 'enter']
};

/**
 * An array of image file paths to pre-load.
 */
var preloadables = [];

/**
 * A magic-named function where all updates should occur.
 */
function update() {
}

/**
 * A magic-named function where all drawing should occur.
 */
function draw() {
  // Draw a background. This is just for illustration so we can see scrolling.
  //context.drawCheckered(80, 0, 0, world.width, world.height);
  var img = new Image();
  //console.log("help");
  img.onload = function () {
    context.drawImage(img, 0, 0);
  };
  img.src = "img/cloudacus.jpg";

  context.drawImage(img, 0, 0, img.width,    img.height,    // source rectangle
      0, 0, canvas.width, canvas.height);
  for (var i = 0; i < pits.length; i++) {
    pits[i].draw();
  }

	treasuries[PLAYER_1].draw();
	treasuries[PLAYER_2].draw();
	
	turnTitle.draw();

  if (gameIsOver) {
    gameOverTitle.draw();
  }
}
function resetTime(){
  var els = document.getElementsByClassName("fireworks");

  Array.prototype.forEach.call(els, function(el) {
    el.style.visibility = "visible";
  });
  setup();
}
/**
 * A magic-named function for one-time setup.
 *
 * @param {Boolean} first
 *   true if the app is being set up for the first time; false if the app has
 *   been reset and is starting over.
 */
function setup(first) {
  // Change the size of the playable area. Do this before placing items!
  world.resize(canvas.width, canvas.height);

  // Switch from side view to top-down.
  Actor.prototype.GRAVITY = false;

  // Initialize the player.
  // player = new Player();
  pits = [];
  treasuries = [];
  turn = PLAYER_1;
  gameIsOver = false;

  for (var i = 0, x=0; i < 6; i++) {
    pits[i] = new Pit(i, PLAYER_1, PIT_OFFSET_X+50*x, PIT_OFFSET_Y*2);
    x++;
  }

  for (var i = 6, x=5; i < 12; i++) {
    pits[i] = new Pit(i, PLAYER_2, PIT_OFFSET_X+50*x, PIT_OFFSET_Y);
    x--;
  }

  treasuries[PLAYER_1] = new Treasury(PLAYER_1, TREASURY_ONE_OFFSET_X, TREASURY_ONE_OFFSET_Y);
  treasuries[PLAYER_2] = new Treasury(PLAYER_2, TREASURY_TWO_OFFSET_X, TREASURY_TWO_OFFSET_Y);

	turnTitle = new TurnTitle(TITLE_OFFSET_X, TITLE_OFFSET_Y);
  gameOverTitle = new GameOverTitle(GAMEOVER_OFFSET_X, GAMEOVER_OFFSET_Y);
}

