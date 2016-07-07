// The main logic for your project goes in this file.

/**
 * The {@link Player} object; an {@link Actor} controlled by user input.
 */
// var player;
var pits;
var treasuries;
var turn;

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
  for (var i = 0; i < pits.length; i++) {
    pits[i].update();
  }
  // player.update();
}

/**
 * A magic-named function where all drawing should occur.
 */
function draw() {
  // Draw a background. This is just for illustration so we can see scrolling.
  context.drawCheckered(80, 0, 0, world.width, world.height);

  for (var i = 0; i < pits.length; i++) {
    pits[i].draw();
  }
	// player.draw();
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
  turn = 0;

  for (var i = 0, x=0; i < 6; i++) {
    pits[i] = new Pit(i, "top", 100+50*x, 50);
    x++;
  }

  for (var i = 6, x=5; i < 12; i++) {
    pits[i] = new Pit(i, "bot", 100+50*x, 100);
    x--;
  }

  treasuries[0] = new Treasury(0);
  treasuries[1] = new Treasury(1);
}

function distributePebbles(startingPit) {

}
