const gameboardFactory = require('./gameboardFactory.js');
const shipFactory = require('./shipFactory.js');

module.exports = () => {
  const game = {
    // properties
    actualPlayer: 1,
    gameStarted: false,
    playerBoard: gameboardFactory(),
    computerBoard: gameboardFactory(),
    // methods
    changePlayer() {
      this.actualPlayer = this.actualPlayer === 1 ? 2 : 1;
    },
    randomPlaceShips(board) {
      const ships = [
        shipFactory(5),
        shipFactory(4),
        shipFactory(3),
        shipFactory(3),
        shipFactory(2),
        shipFactory(2),
      ];
      ships.forEach((ship) => {
        let coordinates = [];
        let orientation = '';
        let validShip = false;
        while (!validShip) {
          coordinates = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
          ];
          orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
          try {
            board.placeShip(ship.length, coordinates, orientation);
            validShip = true;
          } catch (error) {
            validShip = false;
          }
        }
      });
    },
    startGame() {
      if (this.playerBoard.ships.length >= 6 && this.computerBoard.ships.length >= 6) {
        this.gameStarted = true;
      } else {
        throw new Error('You need to place all the ships');
      }
    },
    playerAttack(x, y) {
      const coords = [x, y];
      // check if the game is started
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      // check if the coordinates are valid
      if (coords[0] < 0 || coords[0] > 9 || coords[1] < 0 || coords[1] > 9) {
        throw new Error('Coordinates are not valid');
      }

      // check if the coordinates are already hit
      const misses = this.computerBoard.missedAttacks;
      const missed = misses.some((miss) => miss[0] === coords[0] && miss[1] === coords[1]);

      const hits = this.computerBoard.ships.map((ship) => ship.hits);
      const hitted = hits.some((hit) => hit.some((hitCoords) => hitCoords[0] === coords[0]
        && hitCoords[1] === coords[1]));
      if (missed || hitted) {
        throw new Error('You already attacked this coordinates');
      }

      this.computerBoard.receiveAttack(coords);
      this.changePlayer();
    },
    computerAttack() {
      // check if the game is started
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      const coordinates = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      // check if the coordinates are already hit (using .missedAttacks)
      if (this.playerBoard.missedAttacks
        .some((missedAttack) => missedAttack[0] === coordinates[0]
        && missedAttack[1] === coordinates[1])) {
        this.computerAttack();
      } else {
        this.playerBoard.receiveAttack(coordinates);
        this.changePlayer();
      }
    },
    gameEnd() {
      // check if the game is started
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      if (this.playerBoard.allShipsSunk()) {
        return 'Computer wins';
      }
      if (this.computerBoard.allShipsSunk()) {
        return 'Player wins';
      }
      return false;
    },
    resetGame() {
      this.actualPlayer = 1;
      this.gameStarted = false;
      this.playerBoard = gameboardFactory();
      this.computerBoard = gameboardFactory();
    },
  };
  return game;
};
