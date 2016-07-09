function setUp() {
	for (var i = 0; i < 6; i++) {
		pits[i] = new Pit(i, PLAYER_1, 1, 1);
	}

	for (var i = 6; i < 12; i++) {
		pits[i] = new Pit(i, PLAYER_2, 1, 1);
	}

	treasuries[PLAYER_1] = new Treasury(PLAYER_1, TREASURY_ONE_OFFSET_X, TREASURY_ONE_OFFSET_Y);
	treasuries[PLAYER_2] = new Treasury(PLAYER_2, TREASURY_TWO_OFFSET_X, TREASURY_TWO_OFFSET_Y);
}

function testOne() {
	var results = distributePebbles(0);
}
