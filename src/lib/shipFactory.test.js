const shipFactory = require('./shipFactory.js');

test('shipFactory returns an object', () => {
  expect(typeof shipFactory()).toBe('object');
});

test('shipFactory returns an object with a length property', () => {
  expect(shipFactory()).toHaveProperty('length');
});

test('shipFactory returns an object with a hit property', () => {
  expect(shipFactory()).toHaveProperty('hit');
});

test('shipFactory returns an object with a isSunk property', () => {
  expect(shipFactory()).toHaveProperty('isSunk');
});

test('shipFactory returns an object with a hits property', () => {
  expect(shipFactory()).toHaveProperty('hits');
});

test('shipFactory returns an object with a length property equal to the length argument', () => {
  expect(shipFactory(5).length).toBe(5);
});

test('shipFactory returns an object with a hits property equal to an empty array', () => {
  expect(shipFactory(5).hits).toEqual([]);
});

test('shipFactory returns an object with a hit method that adds a hit to the hits array', () => {
  const ship = shipFactory(5);
  ship.hit(1);
  expect(ship.hits).toEqual([1]);
});

test('shipFactory returns an object with a isSunk method that returns false if there are no hits', () => {
  const ship = shipFactory(5);
  expect(ship.isSunk()).toBe(false);
});

test('shipFactory returns an object with a isSunk method that returns false if there are hits but not all of them', () => {
  const ship = shipFactory(5);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  expect(ship.isSunk()).toBe(false);
});

test('shipFactory returns an object with a isSunk method that returns true if there are hits and all of them', () => {
  const ship = shipFactory(5);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  ship.hit(4);
  ship.hit(5);
  expect(ship.isSunk()).toBe(true);
});