document.addEventListener("DOMContentLoaded", function() {

    const slideContainer = document.getElementById("slideContainer");
    const nextBtn = document.getElementById("nextBtn");
    const choiceButtons = document.getElementById("choiceButtons");
    const choiceResult = document.getElementById("choiceResult");

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    let currentSlide = 0;

    const slides = [
        "LAST CHAPTER 📖✨",
        "Do you want to know why I, your sugar plum, have been created? 💖"
    ];

    function showSlide(text) {
        slideContainer.innerHTML = `<p class="slide-text">${text}</p>`;
        slideContainer.querySelector(".slide-text").style.animation = "fadeIn 1s ease-in-out";
    }

    // Show first slide
    showSlide(slides[currentSlide]);
    nextBtn.style.display = "inline-block";

    nextBtn.addEventListener("click", function() {
        currentSlide++;

        if(currentSlide === 1){
            // Slide 2 → show question with Yes/No buttons
            showSlide(slides[currentSlide]);
            choiceButtons.style.display = "block";
            nextBtn.style.display = "none";
            choiceResult.innerHTML = "";
        }
    });

    // Yes/No buttons currently do nothing (answer will be added later)
    yesBtn.addEventListener("click", function() {
        choiceResult.style.color = "#ff1493";
        choiceResult.innerHTML = "💖";
    });

    noBtn.addEventListener("click", function() {
        choiceResult.style.color = "red";
        choiceResult.innerHTML = "😏";
    });

});
