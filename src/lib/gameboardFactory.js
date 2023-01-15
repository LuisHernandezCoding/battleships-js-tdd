const shipFactory = require('./shipFactory.js');

// function to get the coordinates of a ship
function getShipCoordinates(coordinates, length, orientation) {
  const [x, y] = coordinates;
  const shipCoordinates = [];
  for (let i = 0; i < length; i += 1) {
    if (orientation === 'horizontal') {
      shipCoordinates.push([x + i, y]);
    } else if (orientation === 'vertical') {
      shipCoordinates.push([x, y + i]);
    }
  }
  return shipCoordinates;
}

// function to get the ship that was hit
function getHitShip(coordinates, ships) {
  const [x, y] = coordinates;
  let shipHit = null;
  ships.forEach((ship) => {
    ship.coordinates.forEach((shipCoordinate) => {
      if (shipCoordinate[0] === x && shipCoordinate[1] === y) {
        shipHit = ship;
      }
    });
  });
  return shipHit;
}

// gameboard factory function
function gameboardFactory() {
  const gameboard = {
    ships: [],
    missedAttacks: [],
    placeShip(length, coordinates, orientation) {
      // Check if length is valid (between 1 and 5)
      if (length < 1 || length > 5) {
        throw new Error('Ship length must be between 1 and 5');
      }

      // Check if orientation is valid (horizontal or vertical)
      if (orientation !== 'horizontal' && orientation !== 'vertical') {
        throw new Error('Ship orientation must be horizontal or vertical');
      }

      // Check if coordinates are valid (array of two numbers between 0 and 9)
      if (!Array.isArray(coordinates)) {
        throw new Error('Ship coordinates must be an array');
      }
      if (coordinates.length !== 2) {
        throw new Error('Ship coordinates must be an array of two numbers');
      }
      coordinates.forEach((coordinate) => {
        if (typeof coordinate !== 'number') {
          throw new Error('Ship coordinates must be an array of two numbers');
        }
        if (coordinate < 0 || coordinate > 9) {
          throw new Error('Ship coordinates must be between 0 and 9');
        }
      });

      // Check if ship overlaps with another ship
      const shipCoordinates = getShipCoordinates(coordinates, length, orientation);
      const shipOverlaps = shipCoordinates.some((shipCoordinate) => {
        const [y, x] = shipCoordinate;
        return this.ships.some((ship) => ship.coordinates.some((shipCoordinate) => {
          const [shipX, shipY] = shipCoordinate;
          return shipX === x && shipY === y;
        }));
      });

      if (shipOverlaps) {
        throw new Error('Ships cannot overlap');
      }

      // create ship
      const ship = shipFactory(length);
      ship.coordinates = getShipCoordinates(coordinates, length, orientation);

      // check if ship is off the board
      const shipOffBoard = ship.coordinates.some((shipCoordinate) => {
        const [x, y] = shipCoordinate;
        return x < 0 || x > 9 || y < 0 || y > 9;
      });
      if (shipOffBoard) {
        throw new Error('Ships cannot be placed off the board');
      }

      this.ships.push(ship);
    },
    receiveAttack(coordinates) {
      const shipHit = getHitShip(coordinates, this.ships);
      if (shipHit) {
        shipHit.hit(coordinates);
      } else {
        this.missedAttacks.push(coordinates);
      }
    },
    allShipsSunk() {
      return this.ships.every((ship) => ship.isSunk());
    },
  };
  return gameboard;
}

module.exports = gameboardFactory;
