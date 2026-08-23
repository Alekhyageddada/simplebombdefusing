let src1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaV9jh6hjgKhhtFacJW4HvTkP7m__D0h7CSx9qDc_mqw&s=10";
let src2 = "https://www.shutterstock.com/image-photo/closeup-shot-soldier-defusing-bomb-600nw-676000846.jpg"
let src3 = "https://cdn.vectorstock.com/i/1000v/02/61/time-bomb-on-white-background-vector-8860261.jpg";

let countdown = 10;

let inputText = document.getElementById("bombInput");
let imageEl = document.getElementById("bombImage");
let messageEl = document.getElementById("bombMessage");

imageEl.src = src1;

let intervalId = setInterval(function() {
    countdown = countdown - 1;
    messageEl.textContent = countdown;
    messageEl.classList.add("bomb-countdown-text");
    if (countdown === 0){
        imageEl.src = src3;
        messageEl.textContent = "BOOM";
        messageEl.classList.add("bomb-text-fail");
        clearInterval(intervalId);
    }
},1000);

inputText.addEventListener("keydown",function(event) {
    if(event.key === "Enter" && countdown !== 0 && inputText.value === "defuse"){
        imageEl.src = src2;
        messageEl.textContent = "You Did It!!!!!";
        messageEl.classList.add("bomb-text-success");
        clearInterval(intervalId);
    }
});
