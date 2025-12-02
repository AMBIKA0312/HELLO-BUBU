document.addEventListener("DOMContentLoaded", function() {

    const slideContainer = document.getElementById("slideContainer");
    const choiceButtons = document.getElementById("choiceButtons");
    const nextBtn = document.getElementById("nextBtn");
    const choiceResult = document.getElementById("choiceResult");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    let currentSlide = 0;

    const slides = [
        "LAST CHAPTER 📖✨",
        "Do you want to know why I, your sugar plum, have been created? 💖"
    ];

    // Function to display a slide
    function showSlide(text) {
        slideContainer.innerHTML = `<p class="slide-text">${text}</p>`;
    }

    // Reset state for page revisit
    function resetPage() {
        currentSlide = 0;
        showSlide(slides[currentSlide]);
        nextBtn.style.display = "inline-block";
        choiceButtons.style.display = "none";
        choiceResult.innerHTML = "";
    }

    // Initialize page
    resetPage();

    // Next button behavior
    nextBtn.addEventListener("click", function() {
        currentSlide++;
        if(currentSlide === 1){
            // Show question with Yes/No buttons
            showSlide(slides[currentSlide]);
            choiceButtons.style.display = "block";
            nextBtn.style.display = "none";
            choiceResult.innerHTML = "";
        }
    });

    // Yes button
    yesBtn.addEventListener("click", function() {
        choiceResult.style.color = "#ff1493";
        choiceResult.innerHTML = "💖";
    });

    // No button
    noBtn.addEventListener("click", function() {
        choiceResult.style.color = "red";
        choiceResult.innerHTML = "😏 Retry!";
    });

});
