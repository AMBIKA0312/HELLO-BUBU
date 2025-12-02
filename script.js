function checkAnswer() {
    let input = document.getElementById("answerInput").value.trim().toLowerCase();
    let result = document.getElementById("result");
    let nextBtn = document.getElementById("nextBtn");

    if (input === "bubu") {
        result.innerHTML = "💖 NICE!! You deserve a mind-blowing dynamite kiss 💋💥";
        nextBtn.style.display = "inline-block";

    } else if (input === "") {
        result.innerHTML = "😑 Bubu… at least type SOMETHING 🫠";
        nextBtn.style.display = "none";

    } else {
        let funnyMessages = [
            "😂 OOPS! Wrong answer Bubu… try again cutie!",
            "😜 Nope! Try again my smart princess!",
            "🙈 Wrong… but you're still adorable!",
            "🤭 Ayyy wrong! I know you can do it!"
        ];

        let randomFunny = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

        result.innerHTML = randomFunny;
        nextBtn.style.display = "none";
    }
}

function goNext() {
    alert("Tell me what you want on Page 2 😘💕");
}
