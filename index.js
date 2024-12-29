// Countdown timer
const countdownTimer = setInterval(() => {
    const countDownTime = new Date("2025-03-19T12:00:00.000+01:00").getTime();
    const currentTime = new Date().getTime();
    const timeLeft = countDownTime - currentTime;

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        document.getElementsByClassName("countdown")[0].innerHTML = "Mydei is officially out!";
    } else {
        document.getElementsByClassName(
            "countdown"
        )[0].innerText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    };
}, 1000);

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/prev controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail img controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideDiv");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }