const gameboardFactory = require('./gameboardFactory.js');

/* eslint-disable */
// // Create Gameboard factory.
// Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.logs or DOM methods to make sure your code is doing what you expect it to.
// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.
/* eslint-enable */

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
