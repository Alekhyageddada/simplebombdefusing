let src1 = "https://content.presentermedia.com/files/clipart/00012000/12231/clock_time_bomb_800_wht.jpg";
let src2 = "https://cdn.vectorstock.com/i/1000v/02/61/time-bomb-on-white-background-vector-8860261.jpg";
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
        imageEl.src = src2;
        messageEl.textContent = "BOOM";
        messageEl.classList.add("bomb-text-fail");
        clearInterval(intervalId);
    }
},1000);

inputText.addEventListener("keydown",function(event) {
    if(event.key === "Enter" && countdown !== 0 && inputText.value === "defuse"){
        messageEl.textContent = "You Did It!!!!!";
        messageEl.classList.add("bomb-text-success");
        clearInterval(intervalId);
    }
});