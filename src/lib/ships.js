// Get the images from webpack
import carrier from '../images/battleships-20.png';
import carrier1 from '../images/battleships-01.png';
import carrier2 from '../images/battleships-02.png';
import carrier3 from '../images/battleships-03.png';
import carrier4 from '../images/battleships-04.png';
import carrier5 from '../images/battleships-05.png';

import battleship from '../images/battleships-21.png';
import battleship1 from '../images/battleships-06.png';
import battleship2 from '../images/battleships-07.png';
import battleship3 from '../images/battleships-08.png';
import battleship4 from '../images/battleships-09.png';

import cruiser from '../images/battleships-22.png';
import cruiser1 from '../images/battleships-10.png';
import cruiser2 from '../images/battleships-11.png';
import cruiser3 from '../images/battleships-12.png';

import submarine from '../images/battleships-23.png';
import submarine1 from '../images/battleships-13.png';
import submarine2 from '../images/battleships-14.png';
import submarine3 from '../images/battleships-15.png';

import destroyer from '../images/battleships-24.png';
import destroyer1 from '../images/battleships-18.png';
import destroyer2 from '../images/battleships-19.png';

import patroller from '../images/battleships-25.png';
import patroller1 from '../images/battleships-16.png';
import patroller2 from '../images/battleships-17.png';

import explosion from '../images/explosion.png';

const carrierShip = {
  name: 'Carrier',
  size: 5,
  fullImage: carrier,
  images: [carrier1, carrier2, carrier3, carrier4, carrier5],
};

const battleshipShip = {
  name: 'Battleship',
  size: 4,
  fullImage: battleship,
  images: [battleship1, battleship2, battleship3, battleship4],
};

const cruiserShip = {
  name: 'Cruiser',
  size: 3,
  fullImage: cruiser,
  images: [cruiser1, cruiser2, cruiser3],
};

const submarineShip = {
  name: 'Submarine',
  size: 3,
  fullImage: submarine,
  images: [submarine1, submarine2, submarine3],
};

const destroyerShip = {
  name: 'Destroyer',
  size: 2,
  fullImage: destroyer,
  images: [destroyer1, destroyer2],
};

const patrollerShip = {
  name: 'Patroller',
  size: 2,
  fullImage: patroller,
  images: [patroller1, patroller2],
};

export const ships = [
  carrierShip,
  battleshipShip,
  cruiserShip,
  submarineShip,
  destroyerShip,
  patrollerShip,
];

export function getAllShipImages(shipName) {
  const ship = ships.find((ship) => ship.name === shipName);
  return ship.images;
}

export function getExplosionImage() {
  return explosion;
}