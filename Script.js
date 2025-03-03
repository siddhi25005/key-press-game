let press=document.querySelector(".press");
document.addEventListener("keypress",(event)=>{
    press.innerText=`You Pressed : ${event.key.toUpperCase()}`;
    press.style.backgroundColor="yellow";
})
document.addEventListener("keyup",()=>{
    press.style.backgroundColor="white";
})
