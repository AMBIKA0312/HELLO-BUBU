function checkAnswer() {
    const input = document.getElementById("answerInput").value.trim().toLowerCase();
    const result = document.getElementById("result");
    const nextBtn = document.getElementById("nextBtn");

    if (input === "bubu") {
        result.style.color = "#ff007f";
        result.innerHTML = "💖 NICE! You deserve a mind-blowing dynamite kiss 😘💥";
        nextBtn.style.display = "inline-block"; // appears only after correct answer
    } else {
        result.style.color = "red";
        result.innerHTML = "😝 Oops! Wrong answer Bubu... try again! 💘";
        nextBtn.style.display = "none"; // stays hidden if wrong
    }
}

function goNext() {
    alert("Tell me what you want for Page 2 ❤️");
}
