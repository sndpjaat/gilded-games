const  menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".menuList");

menuIcon.addEventListener("click" , ()=>{
    menuIcon.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden")
    menuList.classList.toggle("active");

}) 
function countdown() {
    var countDownDate = new Date().getTime() + (19 * 24 * 60 * 60 * 1000) + (10 * 60 * 60 * 1000) + (2 * 60 * 1000) + (55 * 1000);

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var countdownElement = document.getElementById("countdown");
        countdownElement.innerHTML = "<span class='color-violet'>" + days + "d</span> <span class='countdown-text'>:</span> " + hours + "hr : " + minutes + "min : " + seconds + "sec";

        if (distance < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "Countdown expired!";
        }
    }, 1000);
}