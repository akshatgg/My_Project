let turn = "X";
let chance = document.querySelector(".gameinfo"); // Use querySelector to get the single element

// Game logic //
let boxes = document.getElementsByClassName("box");
let boxtxt = document.getElementsByClassName('boxtext');

function changeTurn() {
    return turn === "X" ? "O" : "X"; // Use "O" instead of "0", and wrap "X" and "O" in quotes
}

let array = Array.from(boxes);

array.forEach(element => {
    console.log(element);
    element.addEventListener('click', () => {
        if (element.querySelector('.boxtext').innerText === '') { // Use element.querySelector to get the specific box's text
            element.querySelector('.boxtext').innerText = turn;
            console.log(turn); // Just use "turn" instead of "turn.innerText"
            winning();
            turn = changeTurn();
            if (!gameover()) {
                chance.innerText = "Turn for " + turn; // Add a space after "for"
            }
        }
    });
});
    