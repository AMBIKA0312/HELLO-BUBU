document.addEventListener("DOMContentLoaded", function() {

    const slideContainer = document.getElementById("slideContainer");
    const nextBtn = document.getElementById("nextBtn");

    // Slides content
    const slides = [
        "After millions of years... ⏳💫",
        "There comes a day... 🌅✨",
        "We became some janamo janamo ke aashiq (so called Bubu) 💖😍",
        "We didn't even know what changed, how we came to become 7 janamo ke aashiq from a rude CR and not-in-the-list girl... 🤔💞",
        "But it never felt forced; if we felt anything, then pure comfort, friendship and love. 🥰💖"
    ];

    let currentSlide = 0;
    slideContainer.innerHTML = `<p class="slide-text">${slides[currentSlide]}</p>`;
    
    // Hide Next button initially for small effect (optional)
    nextBtn.style.display = "inline-block";

    nextBtn.addEventListener("click", function() {
        currentSlide++;
        if(currentSlide < slides.length){
            slideContainer.innerHTML = `<p class="slide-text">${slides[currentSlide]}</p>`;
        } else {
            // Go to next page after last slide
            window.location.href = "page4.html"; // change this to your next page
        }
    });

});

