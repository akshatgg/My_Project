    let thispage=1;
    let limit=6;
    let list=document.querySelectorAll('.list .item');    

    
    function loaditem(){
        let begin=limit*(thispage-1);
        let end=limit*thispage-1;
        list.forEach((item, key)=>{
            if(key >= begin && key <= end){
                item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
        })
        listpage();
    }

loaditem();

function listpage(){
    let count=Math.ceil(list.length/limit)
    if(thispage!=1){
        let PREV =document.querySelector('.Previ');
        PREV.setAttribute('onclick','changet(' +( thispage - 1)+ ')')
    }
    for(let i=1;i<=count;i++){
            let page=document.querySelector('.active');
            page.setAttribute('onclick',changet('+i+'))
    }
     if(thispage!=count){
        let NEXT=document.querySelector('.Nexts');
        NEXT.setAttribute('onclick','changet('+(thispage+1)+')')
    }

}
function changet(i){
    thispage=i;
    loaditem(); 
}
