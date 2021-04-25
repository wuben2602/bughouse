/**
 * Player Constructor
 */

 function Player(name,color){

    // White is True, Black is False
    this.color = color;
    this.name = name;
    this.board = new Board(this);

}