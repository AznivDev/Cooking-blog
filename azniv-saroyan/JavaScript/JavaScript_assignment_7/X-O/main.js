const reset = document.getElementsByClassName("reset");
class TicTac {
    constructor ( tiles, player1Count, player2Count ) {
        this.player1Count = player1Count;
        this.player2Count  = player2Count;  
        this.tiles = tiles;
        this.currentPlayer = "X";
        this.board = ["", "", "", "", "", "", "", "", ""];
        this.arrayElements = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    }
    changePlayer(){
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }
    resetBoard() {
        this.currentPlayer = "X";
        this.board = ["", "", "", "", "", "", "", "", ""];
        this.tiles.forEach( tile => tile.innerText = "" );
    }
    endGame() {
        setTimeout(() => this.resetBoard(), 1000);
    }
    winner() {      
        if(this.currentPlayer === "X") {
            let player1Name = document.getElementById("player1-name").value;  
            this.player1Count++;
            document.getElementById("player1").value = `${player1Name || "X"} count is ${this.player1Count}` 
        } else if (this.currentPlayer === "O") {
            let player2Name = document.getElementById("player2-name").value; 
            this.player2Count++;
            document.getElementById("player2").value = `${player2Name || "O"} count is ${this.player2Count}`  
        }
    }
    validateGame(){
        let info = document.getElementById("info");
        this.arrayElements.forEach((element) => {
            let a = this.board[element[0]];
            let b = this.board[element[1]];
            let c = this.board[element[2]] 
            if(a !=="" && a ===b && b=== c) {
                this.endGame();
                if(this.currentPlayer === "X") {
                    let player1Name  = document.getElementById("player1-name").value; 
                    info.innerHTML = `Winner is ${player1Name || this.currentPlayer}`;  
                } else if (this.currentPlayer === "O") {
                    let player2Name  = document.getElementById("player2-name").value; 
                    info.innerHTML = `Winner is ${player2Name || this.currentPlayer} `;  
                } 
                this.winner();
                return;
            }
            if(!this.board.includes("")) {
                this.endGame();
                info.innerHTML = "Try again"
                return;
            }
        })
    }
    step(index) {
        const tile = this.tiles[index]; 
        if(tile.innerText)return  
        if(this.currentPlayer === "X") {
            let player1Name  = document.getElementById("player1-name").value; 
            info.innerHTML = `Player is ${player1Name || "X"}`;  
        } else if (this.currentPlayer === "O") {
            let player2Name  = document.getElementById("player2-name").value; 
            info.innerHTML = `Player is ${player2Name || "O"}`;  
        }   
        tile.innerText= this.currentPlayer;
        this.board[index] = this.currentPlayer;
        this.validateGame();
        this.changePlayer();
    }
}
document.addEventListener("DOMContentLoaded", () => { //window.loaded
    const tiles = Array.from(document.getElementsByClassName("tile"));
    let player1Count = Number(document.getElementById("player1").value);
    let player2Count  = Number(document.getElementById("player2").value); 
    const game = new TicTac(tiles, player1Count, player2Count);
    tiles.forEach((tile, index) => tile.addEventListener("click", ()=> game.step(index)));
    document.getElementById("reset").addEventListener("click", () => game.resetBoard());
});
