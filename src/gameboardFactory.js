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

    markHit(location){
        this.board[location].isShot = true;
    }

    checkHit(location){
        return this.board[location].hasShip;
    }
    
    checkCollision(shipLength, location, axis){
        if(axis = 'x'){
            for (let i = 0; i < shipLength; i++){
                return this.board[location + i * 10].hasShip;
            }
        }
        else if(axis = 'y'){
            for (let i = 0; i < shipLength; i++){
                return this.board[location + i ].hasShip;
            }
        }
    }
    placeShip(shipName, shipLength, location, axis){
        if (this.checkCollision(shipLength, location, axis)){return}
        //select gameboard put ship down on xCord, yCord
        if(axis = 'x'){
            for (let i = 0; i < shipLength; i++){
                this.board[location + i * 10].hasShip = true;
            }
        }
        else if (axis = 'y'){
            for (let i = 0; i < shipLength; i++){
                this.board[location + i ].hasShip = true;
            }
        }
    }
}