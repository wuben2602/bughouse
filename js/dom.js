/**
 * DOM Functions
 * 1. This section should include all the getter and setter functions we use to interact with the DOM
 * */ 

 function htmlInit(){

    let container = document.querySelector(".container");
    player1 = new Player("player-1", true); // white
    player2 = new Player("player-2", false); // black

    playerlist = Array.from([player1, player2])
    playerlist.forEach(player =>{
        let pl_element = document.createElement('div');
        pl_element.id = player.name;
        appendBoard(pl_element);
        container.append(pl_element);
    });
    playerlist.forEach(player =>{
        drawBoardState(player)
    });
    
}

// appends a board onto an HTML element
function appendBoard(root){
    let table = document.createElement("table");
    table.classList.add("board");
    Array.from(['8','7','6','5','4','3','2','1']).forEach(letter => {
        let tr = document.createElement("tr");
        Array.from(['a','b','c','d','e','f','g','h']).forEach(num => {
            let th = document.createElement('th');
            th.id = `${letter}${num}`;
            th.innerHTML = `${letter}${num}`;
            tr.append(th);
        });
        table.append(tr);
    });
    root.append(table);
}

// takes a player and draw's their board state
function drawBoardState(player){
    let stateIter = player.board.makeBoardIterator();
    let table = document.querySelector(`#${player.name}`).children[0];
    Array.from(table.children).forEach(tr => {
        Array.from(tr.children).forEach(th => {
            let val = stateIter.next().value;
            if (val != "ES"){
                if (val[0] == "P"){
                    val = player.board.color + val.slice(1);
                }
                else{
                    val = player.board.enemycolor + val.slice(1);
                }
            }
            th.innerHTML = toUnicode(val);
        });
    });
}

function toUnicode(val){
    
    let dict = {
        "WK": "&#9812", "WQ": "&#9813", "WR": "&#9814", "WB": "&#9815", "WN": "&#9816", "WP": "&#9817",
        "BK": "&#9818", "BQ": "&#9819", "BR": "&#9820", "BB": "&#9821", "BN": "&#9822", "BP": "&#9823",
        "ES": " "
    }
    return dict[val];
}