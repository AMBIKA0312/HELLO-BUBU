function checkAnswer() {
    let input = document.getElementById("answerInput").value.trim().toLowerCase();
    let result = document.getElementById("result");
    let nextBtn = document.getElementById("nextBtn");

    if (input === "bubu") {
        result.innerHTML = "NICE! You deserve a mind-blowing dynamite kiss 💋💥";
        nextBtn.style.display = "inline-block";
    } else {
        result.innerHTML = "Nope! Try again 😘";
        nextBtn.style.display = "none";
    }
}

function goNext() {
    // You will tell me what the next page should be, then I’ll build it
    alert("Next page will come once you give details 😍");
}

