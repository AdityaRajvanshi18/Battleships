import Ship from './shipFactory';
import Gameboard from './gameboardFactory';

const temp = new Ship('test', 4);
temp.hit(2);
temp.hit(1);
temp.hit(4);
temp.hit(3);

console.log(temp.isSunk());


const tempBoard = new Gameboard();
console.log(tempBoard);