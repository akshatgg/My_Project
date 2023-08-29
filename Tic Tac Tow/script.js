let turn="X";
let chance=document.getElementsByClassName("gameinfo")
//Game logic //
let boxes=document.getElementsByClassName("box");
let boxtxt=document.getElementsByClassName('boxtext')
function changeTurn(){
return turn ==="X"?"0":X;
}
let array=Array.from(boxes);
array.forEach(element=>{
element.addEventListener('click',()=>{
if(boxtxt.innerText===''){
    boxtxt.innerText=turn;
    winning();
    turn=changeTurn();
    if(!gameover()){
        chance.innerText="Turn for"+turn;
    }

}
})
})