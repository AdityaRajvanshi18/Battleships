import Ship from './shipFactory';
import Gameboard from './gameboardFactory';

const temp = new Ship('test', 4);
temp.hit(2);
temp.hit(1);
temp.hit(4);
temp.hit(3);


const tempBoard = new Gameboard();
console.log(tempBoard);

tempBoard.placeShip('test',4,5,'y');
console.log(tempBoard);

console.log('placing new ship with collision');
tempBoard.placeShip('bluh', 3, 4, 'x')
console.log(tempBoard.checkCollision(3, 4, 'x'));