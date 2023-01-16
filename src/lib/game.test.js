const game = require('./game.js');

// Test if game returns an object
test('game returns an object', () => {
  expect(typeof game()).toBe('object');
});

// Test if game has actualPlayer property
test('game has actualPlayer property', () => {
  expect(game()).toHaveProperty('actualPlayer');
});

// Test the return of actualPlayer (should be 1 at the beginning)
test('game actualPlayer returns 1', () => {
  expect(game().actualPlayer).toBe(1);
});

// Test if game has changePlayer property
test('game has changePlayer property', () => {
  expect(game()).toHaveProperty('changePlayer');
});

// Test if game changes the actualPlayer when changePlayer is called
test('game changes the actualPlayer when changePlayer is called', () => {
  const gameInstance = game();
  gameInstance.changePlayer();
  expect(gameInstance.actualPlayer).toBe(2);
});

// Test if game changes the actualPlayer when changePlayer is called twice
test('game changes the actualPlayer when changePlayer is called twice', () => {
  const gameInstance = game();
  gameInstance.changePlayer();
  gameInstance.changePlayer();
  expect(gameInstance.actualPlayer).toBe(1);
});

// Test if game has playerBoard property
test('game has playerBoard property', () => {
  expect(game()).toHaveProperty('playerBoard');
});

// Test if game has computerBoard property
test('game has computerBoard property', () => {
  expect(game()).toHaveProperty('computerBoard');
});

// Test if playerBoard is an object
test('playerBoard is an object', () => {
  expect(typeof game().playerBoard).toBe('object');
});

// Test if computerBoard is an object
test('computerBoard is an object', () => {
  expect(typeof game().computerBoard).toBe('object');
});

// Test if playerBoard has all the properties of gameboardFactory
test('playerBoard has placeShip method', () => {
  expect(game().playerBoard).toHaveProperty('placeShip');
  expect(game().playerBoard).toHaveProperty('receiveAttack');
  expect(game().playerBoard).toHaveProperty('allShipsSunk');
  expect(game().playerBoard).toHaveProperty('ships');
  expect(game().playerBoard).toHaveProperty('missedAttacks');
});

// Test if computerBoard has all the properties of gameboardFactory
test('computerBoard has placeShip method', () => {
  expect(game().computerBoard).toHaveProperty('placeShip');
  expect(game().computerBoard).toHaveProperty('receiveAttack');
  expect(game().computerBoard).toHaveProperty('allShipsSunk');
  expect(game().computerBoard).toHaveProperty('ships');
  expect(game().computerBoard).toHaveProperty('missedAttacks');
});

// Test if game has randomPlaceShips method
test('game has randomPlaceShips method', () => {
  expect(game()).toHaveProperty('randomPlaceShips');
});

// Test if randomPlaceShips method places ships in playerBoard
test('randomPlaceShips method places ships in playerBoard', () => {
  const gameInstance = game();
  gameInstance.randomPlaceShips(gameInstance.playerBoard);
  // console log the coordinates of the ships in playerBoard
  expect(gameInstance.playerBoard.ships.length).toBe(6);
});

// test if randomPlaceShips method places the correct ships in playerBoard
test('randomPlaceShips method places the correct ships in playerBoard', () => {
  const gameInstance = game();
  gameInstance.randomPlaceShips(gameInstance.playerBoard);
  expect(gameInstance.playerBoard.ships[0].length).toBe(5);
  expect(gameInstance.playerBoard.ships[1].length).toBe(4);
  expect(gameInstance.playerBoard.ships[2].length).toBe(3);
  expect(gameInstance.playerBoard.ships[3].length).toBe(3);
  expect(gameInstance.playerBoard.ships[4].length).toBe(2);
  expect(gameInstance.playerBoard.ships[5].length).toBe(2);
});

// Test if randomPlaceShips method places ships in computerBoard
test('randomPlaceShips method places ships in computerBoard', () => {
  const gameInstance = game();
  gameInstance.randomPlaceShips(gameInstance.computerBoard);
  expect(gameInstance.computerBoard.ships.length).toBe(6);
});

// test if randomPlaceShips method places the correct ships in computerBoard
test('randomPlaceShips method places the correct ships in computerBoard', () => {
  const gameInstance = game();
  gameInstance.randomPlaceShips(gameInstance.computerBoard);
  expect(gameInstance.computerBoard.ships[0].length).toBe(5);
  expect(gameInstance.computerBoard.ships[1].length).toBe(4);
  expect(gameInstance.computerBoard.ships[2].length).toBe(3);
  expect(gameInstance.computerBoard.ships[3].length).toBe(3);
  expect(gameInstance.computerBoard.ships[4].length).toBe(2);
  expect(gameInstance.computerBoard.ships[5].length).toBe(2);
});

// Test if game has startGame method
test('game has startGame method', () => {
  expect(game()).toHaveProperty('startGame');
});

// Test if game has gameStarted property
test('game has gameStarted property', () => {
  expect(game()).toHaveProperty('gameStarted');
});

// Test if gameStarted is false at the beginning
test('gameStarted is false at the beginning', () => {
  expect(game().gameStarted).toBe(false);
});

// Test if startGame throws error if the ships are not placed
test('startGame returns error if the ships are not placed', () => {
  const gameInstance = game();
  expect(() => gameInstance.startGame()).toThrow('You need to place all the ships');
});

// Test if startGame sets gameStarted to true if the ships are placed
test('startGame sets gameStarted to true if the ships are placed', () => {
  const gameInstance = game();
  gameInstance.randomPlaceShips(gameInstance.playerBoard);
  gameInstance.randomPlaceShips(gameInstance.computerBoard);
  gameInstance.startGame();
  expect(gameInstance.gameStarted).toBe(true);
});

// Test if game has playerAttack method
test('game has playerAttack method', () => {
  expect(game()).toHaveProperty('playerAttack');
});

// Test if playerAttack throws error if the game is not started
test('playerAttack throws error if the game is not started', () => {
  const gameInstance = game();
  expect(() => gameInstance.playerAttack(0, 0)).toThrow('You need to start the game');
});

// Test if playerAttack throws error if the coordinates are not valid
test('playerAttack throws error if the coordinates are not valid', () => {
  const gameInstance = game();
  gameInstance.randomPlaceShips(gameInstance.playerBoard);
  gameInstance.randomPlaceShips(gameInstance.computerBoard);
  gameInstance.startGame();
  expect(() => gameInstance.playerAttack(0, 10)).toThrow('Coordinates are not valid');
});

// Test if playerAttack throws error if the coordinates are already attacked
test('playerAttack throws error if the coordinates are already attacked', () => {
  const gameInstance = game();
  gameInstance.randomPlaceShips(gameInstance.playerBoard);
  gameInstance.randomPlaceShips(gameInstance.computerBoard);
  gameInstance.startGame();
  gameInstance.playerAttack(0, 0);
  expect(() => gameInstance.playerAttack(0, 0)).toThrow('You already attacked this coordinates');
});

// Test if playerAttack works correctly
test('playerAttack works correctly', () => {
  const gameInstance = game();
  gameInstance.randomPlaceShips(gameInstance.playerBoard);
  gameInstance.randomPlaceShips(gameInstance.computerBoard);
  gameInstance.startGame();
  const attackX = gameInstance.computerBoard.ships[0].coordinates[0][0];
  const attackY = gameInstance.computerBoard.ships[0].coordinates[0][1];
  gameInstance.playerAttack(attackX, attackY);
  expect(gameInstance.computerBoard.allShipsSunk()).toBe(false);
});

// Test if game has computerAttack method
test('game has computerAttack method', () => {
  expect(game()).toHaveProperty('computerAttack');
});

// Test if computerAttack throws error if the game is not started
test('computerAttack throws error if the game is not started', () => {
  const gameInstance = game();
  expect(() => gameInstance.computerAttack()).toThrow('You need to start the game');
});

// Test if computerAttack works correctly
test('computerAttack works correctly', () => {
  const gameInstance = game();
  gameInstance.randomPlaceShips(gameInstance.playerBoard);
  gameInstance.randomPlaceShips(gameInstance.computerBoard);
  gameInstance.startGame();
  const attackX = gameInstance.playerBoard.ships[0].coordinates[0][0];
  const attackY = gameInstance.playerBoard.ships[0].coordinates[0][1];
  gameInstance.computerAttack(attackX, attackY);
  expect(gameInstance.playerBoard.allShipsSunk()).toBe(false);
});

// Test if game has gameEnd method
test('game has gameEnd method', () => {
  expect(game()).toHaveProperty('gameEnd');
});

// Test if gameEnd throws error if the game is not started
test('gameEnd throws error if the game is not started', () => {
  const gameInstance = game();
  expect(() => gameInstance.gameEnd()).toThrow('You need to start the game');
});

// Test if gameEnd returns true if the player won
test('gameEnd returns true if the player won', () => {
  const gameInstance = game();
  gameInstance.randomPlaceShips(gameInstance.playerBoard);
  gameInstance.randomPlaceShips(gameInstance.computerBoard);
  gameInstance.startGame();
  gameInstance.computerBoard.ships.forEach((ship) => {
    ship.coordinates.forEach((coordinate) => {
      gameInstance.playerAttack(coordinate[0], coordinate[1]);
    });
  });
  expect(gameInstance.gameEnd()).toBe('Player wins');
});
