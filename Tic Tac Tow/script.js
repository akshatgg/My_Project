let turn = "X";
let chance = document.querySelector(".gameinfo"); 

// Game logic //
let boxes = document.getElementsByClassName("box");
let boxtxt = document.getElementsByClassName("boxtext");
let gameover =false;
function changeTurn() {
    return turn === "X" ? "O" : "X"; // Use "O" instead of "0", and wrap "X" and "O" in quotes
}

let aray = Array.from(boxes);

aray.forEach(function(element) {
    console.log(element);
    element.addEventListener('click', () => {
        if (element.querySelector('.boxtext').innerText === '') { // Use element.querySelector to get the specific box's text
            element.querySelector('.boxtext').innerText = turn;
            console.log(turn); // Just use "turn" instead of "turn.innerText"
            winning();
            turn = changeTurn();
            if (!gameover) {
                chance.innerText = "Turn for " + turn; // Add a space after "for"
            }
        }
    });
});
//check for winning//
function winning(){
let wins =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
wins.forEach(function(e){
    if((boxtxt[e[0]].innerText === boxtxt[e[1]].innerText) && ( boxtxt[e[1]].innerText === boxtxt[e[2]].innerText )&& (boxtxt[e[0]].innerText !=="")) {
        chance.innerText = boxtxt[e[0]].innerText +" Wins";
        gameover=true;
    }
})
}
const re=document.getElementById("reset");
re.addEventListener('click',()=>{
    aray.forEach(function(e){
        if(e.querySelector(".boxtext").innerText !==''){
            e.querySelector(".boxtext").innerText =""
        }
    })
})
        