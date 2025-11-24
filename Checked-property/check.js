//checked //


const myCheckBox= document.getElementById("myCheckBox");
const visaBtn= document.getElementById("visaBtn");
const masterCardBtn= document.getElementById("masterCardBtn");
const payPalBtn= document.getElementById("payPalBtn");
const mySubmit= document.getElementById("mySubmit");
const subResult= document.getElementById("subResult");
const paymentResult= document.getElementById("paymentResult");


mySubmit.onclick=function(){
    if(myCheckBox.checked){
        subResult.textContent= `You are subscribed!`;

    }
    else{
        subResult.textContent= `You are Not subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent="You select to pay with VISA";
        
}
    else if(masterCardBtn.checked){
        paymentResult.textContent="You select to pay with Mastercard";

    }

    else if(payPalBtn.checked){
        paymentResult.textContent="You select to pay with PayPal";

    }
    else{
        paymentResult.textContent= `You must select a payment Method !`;
    }
} 



   