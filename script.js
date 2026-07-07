// ==========================
// Otome Special GIFT
// ==========================

const form = document.getElementById("giftForm");

const receiveRadios = document.querySelectorAll(
'input[name="receive"]'
);

const shippingCard =
document.getElementById("shippingCard");

const memberCard =
document.getElementById("memberCard");

const complete =
document.getElementById("complete");

const loading =
document.getElementById("loading");

const heart =
document.getElementById("heartBurst");


// --------------------------
// 受け取る を選択
// --------------------------

receiveRadios.forEach(radio=>{

radio.addEventListener("change",()=>{

if(radio.value==="受け取る"&&radio.checked){

shippingCard.classList.remove("hidden");
memberCard.classList.remove("hidden");

}else{

shippingCard.classList.add("hidden");
memberCard.classList.add("hidden");

}

});

});


// --------------------------
// ハート演出
// --------------------------

function playHeart(){

heart.style.opacity="1";

heart.style.transform="translate(-50%,-50%) scale(1.4)";

setTimeout(()=>{

heart.style.opacity="0";

heart.style.transform="translate(-50%,-50%) scale(.5)";

},700);

}


// --------------------------
// 送信
// --------------------------

form.addEventListener("submit",async(e)=>{

e.preventDefault();

playHeart();

loading.style.display="flex";

setTimeout(()=>{

loading.style.display="none";

complete.style.display="flex";

form.reset();

shippingCard.classList.add("hidden");
memberCard.classList.add("hidden");

},1500);

});
