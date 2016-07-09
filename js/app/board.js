var PLAYER_1 = 0;
var PLAYER_2 = 1;

var PIT_OFFSET_X = 250;
var PIT_OFFSET_Y = 150;

var TITLE_OFFSET_X = 300;
var TITLE_OFFSET_Y = 100;

var TREASURY_ONE_OFFSET_X = 500;
var TREASURY_ONE_OFFSET_Y = 200;

var TREASURY_TWO_OFFSET_X = 200;
var TREASURY_TWO_OFFSET_Y = 200;

var pits;
var treasuries;
var turn;
var turnTitle;


function distributeHand(currentPit, pebblesInHand) {
	while (pebblesInHand > 0) {
		if (currentPit.id == 6 && turn == PLAYER_1) {
      treasuries[PLAYER_1].pebbleCount++;
			pebblesInHand--;
      goesAgain = true;
    } else if (currentPit.id == 0 && turn == PLAYER_2) {
      treasuries[PLAYER_2].pebbleCount++;
			pebblesInHand--;
      goesAgain = true;
    }

		if (pebblesInHand <= 0) {
			return {
				endingPit: currentPit,
				goesAgain: true
			}
		}

		// dont increment current pit if its the last pebble thrown 
		if (pebblesInHand > 1) {
    	currentPit = (currentPit + 1) % 12;
		}

  	currentPit.pebbleCount++;
		pebblesInHand--;

    goesAgain = false;
  }
	return {
		endingPit: currentPit,
		goesAgain: goesAgain
	}
}

function distributePebbles(startingPit) {
	var progressivePit = pits[startingPit],
      goesAgain = false,
			isFirstRun = true;

	if (progressivePit.pebbleCount == 0) {
		return {
    	goesAgain: true,
    	endingPit: startingPit 
  	}	
	}

  while(progressivePit.pebbleCount > 1 || isFirstRun) {
    pebblesInHand = progressivePit.pebbleCount;
    progressivePit.pebbleCount = 0;

		nextPit = pit[( progressivePit + 1 ) % 12];
		progressivePit = pits[distributeHand(nextPit)];
		isFirstRun = false;
  }

  return {
    goesAgain: goesAgain,
    endingPit: progressivePit
  }
}

function toggleTurn() {
  if ( turn == PLAYER_1 ) {
    turn = PLAYER_2;
  } else {
    turn = PLAYER_1;
  }
}

// Steals from the adjacent, oppenent pit
function steal(pit) {
  adjacent = 11 - pit;

  treasuryDestination = PLAYER_1;
  if (adjacent < 6) {
    treasuryDestination = PLAYER_2;
  }

  pebblesStolen = pits[adjacent].pebbleCount;
  treasuries[treasuryDestination].pebbleCount += pebblesStolen;
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

