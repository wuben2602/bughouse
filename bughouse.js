// bughouse.js


/**
 * DOM Functions
 * 1. This section should include all the getter and setter functions we use to interact with the DOM
 * */ 

// initializes HTML doc -- right now only does one chess board
function htmlInit(){
    let container = document.querySelector(".container");
    appendBoard(container);
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

// function to get info of a single cell --> need to return a cell object (NOT CLASS)
// function to draw on the board a board state consisting of an 8x8 array

/**
 * Chess Logic and Classes
 */


/**
 * Game Logic
 */
