document.addEventListener("DOMContentLoaded", function() {

    const slideContainer = document.getElementById("slideContainer");
    const nextBtn = document.getElementById("nextBtn");
    const choiceButtons = document.getElementById("choiceButtons");
    const choiceResult = document.getElementById("choiceResult");

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    let currentSlide = 0;

    // Slides
    const slides = [
        "LAST CHAPTER 📖✨",
        "Do you want to know the reason why I have been created, my sugar plum? 💖"
        // Slide 2 will show Yes/No buttons
        // Subsequent slides will be controlled dynamically
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

        } else if(currentSlide === 2){
            // Final slides after Yes/No
            showSlide("Thank you so much ❤️ Love You 💖");
            nextBtn.style.display = "inline-block";
        } else if(currentSlide === 3){
            showSlide("Bye Bye for now 👋💞");
            nextBtn.style.display = "inline-block";
        } else {
            // You can redirect or end
            slideContainer.innerHTML = "<p class='slide-text'>The End 🎉</p>";
            nextBtn.style.display = "none";
        }
    });

    // Yes/No button behavior
    yesBtn.addEventListener("click", function() {
        choiceResult.style.color = "#ff1493";
        choiceResult.innerHTML = "I created my sugar plum because the half-owner of your heart 💖 is very happy and thankful for having you all as my friends 😘. This year my birthday was the best so far! Thank you very, very much! 🎉🥰";
        choiceButtons.style.display = "none";
        nextBtn.style.display = "inline-block";
    });

    noBtn.addEventListener("click", function() {
        choiceResult.style.color = "red";
        choiceResult.innerHTML = "Oops 😏 Retry!";
        // Keep buttons visible to let her click yes after retry
    });

});
