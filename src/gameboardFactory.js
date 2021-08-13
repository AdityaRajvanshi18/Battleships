import Ship from './shipFactory';

export default class Gameboard{
    constructor(board){
        this.board = board || [];
        if(!this.board.length) this.initialize();
    }
    initialize(){
        for(let i = 0; i < 100; i++) {
			this.board.push({ hasShip: false, isShot: false });
		}
	}
    
    placeShip(shipType, shipLength, xCord, yCord){
        //select gameboard put ship down on xCord, yCord

    
    }
}