import Player from './player.js';

test('Player is a function', () => {
  expect(typeof Player).toBe('function');
});

test('Player returns an object', () => {
  expect(typeof Player()).toBe('object');
});

test('Player returns an object with attack and getBoard methods', () => {
  expect(typeof Player().attack).toBe('function');
  expect(typeof Player().getBoard).toBe('function');
});

test('Player can attack enemy Gameboard and miss', () => {
  const player = Player();
  const enemy = Player();
  const enemyBoard = enemy.getBoard();
  player.attack(enemyBoard, 0, 0);
  expect(enemyBoard.missedAttacks).toEqual([[0, 0]]);
});

test('Player can attack enemy Gameboard and hit', () => {
  const player = Player();
  const enemy = Player();
  const enemyBoard = enemy.getBoard();
  enemyBoard.placeShip(5, [0, 0], 'horizontal');
  player.attack(enemyBoard, 0, 0);
  expect(enemyBoard.missedAttacks).toEqual([]);
  expect(enemyBoard.ships[0].hits).toEqual([[0, 0]]);
});

test('Player can attack enemy Gameboard and sink a ship', () => {
  const player = Player();
  const enemy = Player();
  const enemyBoard = enemy.getBoard();
  enemyBoard.placeShip(5, [0, 0], 'horizontal');
  player.attack(enemyBoard, 0, 0);
  player.attack(enemyBoard, 1, 0);
  player.attack(enemyBoard, 2, 0);
  player.attack(enemyBoard, 3, 0);
  player.attack(enemyBoard, 4, 0);
  expect(enemyBoard.ships[0].isSunk()).toBe(true);
});

test('Player can attack enemy Gameboard and win the game', () => {
  const player = Player();
  const enemy = Player();
  const enemyBoard = enemy.getBoard();
  enemyBoard.placeShip(5, [0, 0], 'vertical');
  player.attack(enemyBoard, 0, 0);
  player.attack(enemyBoard, 0, 1);
  player.attack(enemyBoard, 0, 2);
  player.attack(enemyBoard, 0, 3);
  player.attack(enemyBoard, 0, 4);
  expect(enemyBoard.allShipsSunk()).toBe(true);
});
