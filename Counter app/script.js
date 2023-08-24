let decrementb=document.getElementById("Decrement");
console.log(decrementb.innerText);
let incrementb=document.getElementById("Increment");
console.log(incrementb.innerText);
let resetb=document.getElementById("reset");
console.log(resetb.innerText);
let displayvalue=document.getElementById("display")
console.log(displayvalue.innerText);


function inc(){
let value=Number(displayvalue.innerText);
value=value+1;
return value;
}
incrementb.addEventListener("click", inc);


function dec(){
    let value=Number(displayvalue.innerText);
    value=value-1;
    return value;
    }
    decrementb.addEventListener("click", dec);



    
function re(){
    displayvalue.innerText=0;
}
incrementb.addEventListener("click", dec);
resetb.addEventListener("click",re);
