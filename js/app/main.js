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
  //REFACTOR

  // Progresssive pit is any pit that is ended on (and you need to pick up those pebbles to continue)
  // Current pit is the pit that is being distributed one pebble.

  var progressivePit = startingPit
      currentPit = (startingPit + 1) % 12,
      goesAgain = false;

  while(pits[progressivePit].pebbleCount > 1 || !goesAgain) {
    pebblesToDistribute = pits[progressivePit].pebbleCount;
    pits[progressivePit].pebbleCount = 0;

    for (var i = 0; i < pebblesToDistribute; i++) {
      //make sure to distribute to the treasuries too!
      if (currentPit.id % 6 == 0) {
        if (currentPit.id == 6) {
          treasuries[1].pebbleCount++;
          goesAgain = true;
          continue;
        } else {
          treasuries[0].pebbleCount++;
          goesAgain = true;
          continue;
        }
      }

      currentPit.pebbleCount++;
      currentPit = (currentPit + 1) % 12;
      goesAgain = false;
    }
    progressivePit = currentPit;
  }

  if (!goesAgain) {
    toggleTurn();
  }

  return progressivePit;  // the pit that was ended on (with one pebble)
}

function toggleTurn() {
  if ( turn == 0 ) {
    turn  = 1;
  } else {
    turn = 0;
  }
}

// Steals from the adjacent, oppenent pit
function steal(pit) {
  adjacent = 11 - pit;
  treasuryDestination = 0;

  if (adjacent < 6) {
    treasuryDestination = 1;
  }

  pebblesStolen = pits[adjacent].pebbleCount;
  treasuries[treasuryDestination] += pebblesStolen;
  pits[adjacent].pebbleCount = 0;
}

function gameOver() {
  gameOver = true;

  for (var i = 0; i < 12 || gameOver; i++) {
    if (pits[i].pebbleCount > 0) {
      gameOver = false;
    }
  }
  return gameOver;
}
