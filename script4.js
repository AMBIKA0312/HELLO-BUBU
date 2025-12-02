document.addEventListener("DOMContentLoaded", function() {

    const slideContainer = document.getElementById("slideContainer");
    const choiceButtons = document.getElementById("choiceButtons");
    const nextBtn = document.getElementById("nextBtn");
    const choiceResult = document.getElementById("choiceResult");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    let currentSlide = 0;

    // Exact text you provided
    const slides = [
        { text: "LAST CHAPTER 📖✨", type: "normal" },
        { text: "Do you want to know why I have been created, my sugar plum? 💖", type: "question" },
        { text: "I have been created because the half-owner of your heart 💖 is very happy and thankful for having you all as her friends 😘. This year her birthday was the best so far! 🎉🥰", type: "normal" },
        { text: "Thank you so much ❤️ Love You 💖", type: "normal" },
        { text: "Bye Bye for now 👋💞", type: "normal" }
    ];

    function showSlide(index) {
        const slide = slides[index];
        slideContainer.innerHTML = `<p class="slide-text">${slide.text}</p>`;
        slideContainer.querySelector(".slide-text").style.animation = "fadeIn 1s ease-in-out";

        choiceButtons.style.display = "none";
        choiceResult.innerHTML = "";
        nextBtn.style.display = "inline-block";

        if(slide.type === "question") {
            choiceButtons.style.display = "block";
            nextBtn.style.display = "none";
        }
    }

    // Initialize page
    showSlide(currentSlide);

    // Next button click
    nextBtn.addEventListener("click", function() {
        currentSlide++;
        if(currentSlide >= slides.length){
            nextBtn.style.display = "none"; // end
            return;
        }
        showSlide(currentSlide);
    });

    // Yes button click → show gratitude slide
    yesBtn.addEventListener("click", function() {
        currentSlide = 2; // gratitude slide
        showSlide(currentSlide);
        nextBtn.style.display = "inline-block";
        choiceButtons.style.display = "none";
    });

    // No button click → playful retry
    noBtn.addEventListener("click", function() {
        choiceResult.style.color = "red";
        choiceResult.innerHTML = "😏 Retry!";
    });

});
