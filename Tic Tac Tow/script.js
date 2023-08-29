let turn="X"
let chance=document.getElementsByClassName(".gameinfo")
//Game logic //
let boxes=document.getElementsByClassName("box");
let boxtxt=document.getElementsByClassName('boxtext')
function changeTurn(){
return turn ==="X"?"0":"X";
}
let array=Array.from(boxes);
array.forEach(element=>{
    console.log(element);
element.addEventListener('click',()=>{
if( element.querySelector('.boxtext').innerText = turn){
    boxtxt.innerText=turn;
    console.log(turn.innerText);
    winning();
    turn=changeTurn()
    if(!gameover()){
        chance.innerText="Turn for"+turn;
    }

}
})
})