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

      // create ship
      const ship = shipFactory(length);
      ship.coordinates = getShipCoordinates(coordinates, length, orientation);

      // check if ship overlaps with another ship
      const shipOverlaps = this.ships.some((ship) => ship.coordinates
        .some((shipCoordinate) => ship.coordinates
          .some((otherShipCoordinate) => shipCoordinate[0] === otherShipCoordinate[0]
            && shipCoordinate[1] === otherShipCoordinate[1])));
      if (shipOverlaps) {
        throw new Error('Ships cannot overlap');
      }

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
