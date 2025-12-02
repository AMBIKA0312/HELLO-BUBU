function checkAnswer() {
    let input = document.getElementById("answerInput").value.trim().toLowerCase();
    let result = document.getElementById("result");
    let nextBtn = document.getElementById("nextBtn");

    if (input === "bubu") {
        result.innerHTML = "NICE! You deserve a mind-blowing dynamite kiss 💋💥";
        nextBtn.style.display = "inline-block";
    } else {
        result.innerHTML = "Nope Bubu 😘 Try again!";
        nextBtn.style.display = "none";
    }
}

function goNext() {
    // will add page 2 based on your idea
    alert("Tell me what you want on the next page 💖");
}
