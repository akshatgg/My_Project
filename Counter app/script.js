const decrementb=document.getElementById("Decrement");
console.log(decrementb.innerText);

const incrementb=document.getElementById("Increment");
console.log(incrementb.innerText);

const resetb=document.getElementById("reset");
console.log(resetb.innerText);

const displayvalue=document.getElementById("display");
console.log(displayvalue.innerText);

function inc(){
    let value=Number(displayvalue.innerText);
    value=value+1;
    displayvalue.innerText=value;
    return value;
}
incrementb.addEventListener("click", inc);

function dec(){
    let value=Number(displayvalue.innerText);
   value =value-1;
    displayvalue.innerText=value;
    return value;
}
decrementb.addEventListener("click", dec);

function re(){
    displayvalue.innerText = 0;
}
resetb.addEventListener("click", re);
