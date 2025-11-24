//counrter progam//

const decrease= document.getElementById("myDecrease");
const reset = document.getElementById("myReset");
const increase = document.getElementById("myIncrease");
const countLabel = document.getElementById("store");
let count=0;


increase.onclick= function(){
    count++;
    countLabel.textContent=count;
}


decrease.onclick= function(){
    count--;
    countLabel.textContent=count;
}


reset.onclick= function(){
    count=0;
    countLabel.textContent=count;
} 


 
 

