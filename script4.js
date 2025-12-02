document.addEventListener("DOMContentLoaded", function() {

    const slideContainer = document.getElementById("slideContainer");
    const choiceButtons = document.getElementById("choiceButtons");
    const nextBtn = document.getElementById("nextBtn");
    const choiceResult = document.getElementById("choiceResult");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    let currentSlide = 0;

    const slides = [
        { text: "LAST CHAPTER 📖✨", type: "normal" },
        { text: "Do you want to know why I, your sugar plum, have been created? 💖", type: "question" },
        { text: "I have been created because the half-owner of your heart 💖 is very happy and thankful for having you all as my friends 😘. This year my birthday was the best so far! 🎉🥰", type: "normal" },
        { text: "Thank you so much ❤️ Love You 💖", type: "normal" },
        { text: "Bye Bye for now 👋💞", type: "normal" }
    ];

    function showSlide(index) {
        const slide = slides[index];
        slideContainer.innerHTML = `<p class="slide-text">${slide.text}</p>`;
        slideContainer.querySelector(".slide-text").style.animation = "fadeIn 1s ease-in-out";

        // Reset buttons and result
        choiceButtons.style.display = "none";
        choiceResult.innerHTML = "";
        nextBtn.style.display = "inline-block";

        if(slide.type === "question") {
            choiceButtons.style.display = "block";
            nextBtn.style.display = "none"; // wait until Yes clicked
        }
    }

    // Initial slide
    showSlide(currentSlide);

    nextBtn.addEventListener("click", function() {
        currentSlide++;
        if(currentSlide >= slides.length) {
            nextBtn.style.display = "none"; // end
            return;
        }
        showSlide(currentSlide);
    });

    yesBtn.addEventListener("click", function() {
        choiceResult.style.color = "#ff1493";
        choiceResult.innerHTML = slides[2].text; // show gratitude message
        nextBtn.style.display = "inline-block";
        choiceButtons.style.display = "none";
        currentSlide = 2; // set to gratitude message
    });

    noBtn.addEventListener("click", function() {
        choiceResult.style.color = "red";
        choiceResult.innerHTML = "😏 Retry!";
    });

});
