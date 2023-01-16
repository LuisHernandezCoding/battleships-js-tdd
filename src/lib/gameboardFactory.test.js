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
test('gameboardFactory can place a ship and return its length', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  expect(gameboard.ships[0].length).toBe(5);
});

test('gameboardFactory can place multiple ships and return their lengths', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  gameboard.placeShip(4, [1, 1], 'horizontal');
  gameboard.placeShip(3, [2, 2], 'horizontal');
  gameboard.placeShip(2, [3, 3], 'horizontal');
  gameboard.placeShip(1, [4, 4], 'horizontal');
  expect(gameboard.ships[0].length).toBe(5);
  expect(gameboard.ships[1].length).toBe(4);
  expect(gameboard.ships[2].length).toBe(3);
  expect(gameboard.ships[3].length).toBe(2);
  expect(gameboard.ships[4].length).toBe(1);
});

test('gameboardFactory can place a ship, receive an attack, and return the coordinates of the hit', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.ships[0].hits).toEqual([[0, 0]]);
});

test('gameboardFactory can place a ship, receive an attack, and return the coordinates of the miss', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  gameboard.receiveAttack([0, 1]);
  expect(gameboard.missedAttacks).toEqual([[0, 1]]);
});

test('gameboardFactory can place a ship, and return false to allShipsSunk if there are ships but none of them are sunk', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  expect(gameboard.allShipsSunk()).toBe(false);
});

test('gameboardFactory can place a ship, receive multiple attacks, and return false to allShipsSunk if the ship is not sunk', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([1, 0]);
  gameboard.receiveAttack([2, 0]);
  gameboard.receiveAttack([3, 0]);
  expect(gameboard.allShipsSunk()).toBe(false);
});

test('gameboardFactory can place a ship, receive multiple attacks, and return true to allShipsSunk if the ship is sunk', () => {
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
// Check for overlapping ships
test('gameboardFactory returns error if second ship is placed on top of first ship (horizontal)', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'horizontal');
  expect(() => gameboard.placeShip(5, [0, 0], 'horizontal')).toThrow();
  expect(() => gameboard.placeShip(5, [1, 0], 'horizontal')).toThrow();
  expect(() => gameboard.placeShip(5, [2, 0], 'horizontal')).toThrow();
  expect(() => gameboard.placeShip(5, [3, 0], 'horizontal')).toThrow();
  expect(() => gameboard.placeShip(5, [4, 0], 'horizontal')).toThrow();
});

test('gameboardFactory returns error if second ship is placed on top of first ship (vertical)', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(5, [0, 0], 'vertical');
  expect(() => gameboard.placeShip(5, [0, 0], 'vertical')).toThrow();
  expect(() => gameboard.placeShip(5, [0, 1], 'vertical')).toThrow();
  expect(() => gameboard.placeShip(5, [0, 2], 'vertical')).toThrow();
  expect(() => gameboard.placeShip(5, [0, 3], 'vertical')).toThrow();
  expect(() => gameboard.placeShip(5, [0, 4], 'vertical')).toThrow();
});

// Check for coordinates (out of bounds)
test('gameboardFactory returns error if ship is placed outside the board (horizontal)', () => {
  const gameboard = gameboardFactory();
  expect(() => gameboard.placeShip(5, [6, 0], 'horizontal')).toThrow();
});

test('gameboardFactory returns error if ship is placed outside the board (vertical)', () => {
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