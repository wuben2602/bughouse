/**
 * Board Logic (P- player, O- opponent)
 * 1. PK, PQ, PB, PN, PR, PP (king, queen, bishop, knight, rook, pawn)
 * 2. OK, OQ, OB, ON, OR, OP
 * 3. ES, stands for empty space
 */

 function Board(player){

    this.initial = [
        ["OR","ON","OB","OK","OQ","OB","ON","OR"],
        ["OP","OP","OP","OP","OP","OP","OP","OP"],
        ["ES","ES","ES","ES","ES","ES","ES","ES"],
        ["ES","ES","ES","ES","ES","ES","ES","ES"],
        ["ES","ES","ES","ES","ES","ES","ES","ES"],
        ["ES","ES","ES","ES","ES","ES","ES","ES"],
        ["PP","PP","PP","PP","PP","PP","PP","PP"],
        ["PR","PN","PB","PQ","PK","PB","PN","PR"]
    ]

    // attributes

    this.state = this.initial;
    this.color = (player.color ? "W" : "B" );
    this.enemycolor = (player.color ? "B" : "W" );

    // methods

    this.reset = function(){
        this.state = this.initial;
    }

    this.reverse = function(){
        currState = this.state;
    }

    this.makeBoardIterator = function*(){
        let itercount = 0;
        for (let row = 0; row < 8; row++){
            for (let col = 0; col < 8; col++){
                yield this.state[row][col];
                itercount++;
            }
        }
        return itercount;
    } 
}