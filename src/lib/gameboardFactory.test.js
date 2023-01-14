const gameboardFactory = require('./gameboardFactory.js');

// General initialization tests
test('gameboardFactory returns an object', () => {
  expect(typeof gameboardFactory()).toBe('object');
});

test('gameboardFactory returns an object with a placeShip property', () => {
  expect(gameboardFactory()).toHaveProperty('placeShip');
});

test('gameboardFactory returns an object with a receiveAttack property', () => {
  expect(gameboardFactory()).toHaveProperty('receiveAttack');
});

test('gameboardFactory returns an object with a allShipsSunk property', () => {
  expect(gameboardFactory()).toHaveProperty('allShipsSunk');
});

test('gameboardFactory returns an object with a missedAttacks property', () => {
  expect(gameboardFactory()).toHaveProperty('missedAttacks');
});

// functionality tests
test('gameboardFactory returns an object with a placeShip method that places a ship at the given coordinates', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  expect(gameboard.ships[0].length).toBe(5);
});

test('gameboardFactory returns an object with a receiveAttack method that hits a ship if the attack hits', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.ships[0].hits).toEqual([[0, 0]]);
});

test('gameboardFactory returns an object with a receiveAttack method that adds the coordinates of the missed attack to the missedAttacks array', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  gameboard.receiveAttack([0, 1]);
  expect(gameboard.missedAttacks).toEqual([[0, 1]]);
});

test('gameboardFactory returns an object with a allShipsSunk method that returns false if there are no ships', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  expect(gameboard.allShipsSunk()).toBe(false);
});

test('gameboardFactory returns an object with a allShipsSunk method that returns false if there are ships but not all of them are sunk', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([1, 0]);
  gameboard.receiveAttack([2, 0]);
  gameboard.receiveAttack([3, 0]);
  expect(gameboard.allShipsSunk()).toBe(false);
});

test('gameboardFactory returns an object with a allShipsSunk method that returns true if there are ships and all of them are sunk', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([1, 0]);
  gameboard.receiveAttack([2, 0]);
  gameboard.receiveAttack([3, 0]);
  gameboard.receiveAttack([4, 0]);
  expect(gameboard.allShipsSunk()).toBe(true);
});

// Constraints tests
test('gameboardFactory returns an object with a placeShip method that does not allow overlapping ships', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  expect(() => gameboard.placeShip(5, [0, 0], 'horizontal')).toThrow();
});

test('gameboardFactory returns an object with a placeShip method that does not allow ships to be placed outside the board', () => {
  const gameboard = gameboardFactory();
  expect(() => gameboard.placeShip(5, [6, 0], 'horizontal')).toThrow();
});

test('gameboardFactory returns an object with a placeShip method that does not allow ships to be placed outside the board', () => {
  const gameboard = gameboardFactory();
  expect(() => gameboard.placeShip(5, [0, 6], 'vertical')).toThrow();
});

// Check for length of ships
test('gameboardFactory returns error if ship length is less than 1', () => {
  const gameboard = gameboardFactory();
  expect(() => gameboard.placeShip(0, [0, 0], 'horizontal')).toThrow();
});

test('gameboardFactory returns error if ship length is greater than 5', () => {
  const gameboard = gameboardFactory();
  expect(() => gameboard.placeShip(6, [0, 0], 'horizontal')).toThrow();
});