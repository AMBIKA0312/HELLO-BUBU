const choiceResult = document.getElementById("choiceResult");
const nextBtn = document.getElementById("nextBtn");
const choiceButtons = document.getElementById("choiceButtons");
const chapter = document.getElementById("chapter");
const chat = document.getElementById("chat");

function choiceYes() {
    choiceResult.style.color = "#ff007f";
    choiceResult.innerHTML = "Nice choice 😘";
    nextBtn.style.display = "inline-block";
    choiceButtons.style.display = "none";
}

function choiceNo() {
    choiceResult.style.color = "red";
    choiceResult.innerHTML = "What! I will still show you 😏";
    nextBtn.style.display = "inline-block";
    choiceButtons.style.display = "none";
}

function showChapter() {
    chapter.style.display = "block";
    nextBtn.style.display = "none"; 
    choiceResult.style.display = "none";

    // Chat messages with emojis
    const messages = [
        { text: "Add me to the class group CR 📝✨", side: "left", future: "👩‍🎓 (Future ME: add me to your heart BUBU 💖😘)" },
        { text: "First ask permission from HOD, you are not in the list 🤨📋", side: "right" }
    ];

    let delay = 500;
    messages.forEach((msg) => {
        setTimeout(() => {
            const bubble = document.createElement("div");
            bubble.classList.add("bubble", msg.side);
            bubble.style.animation = "popIn 0.5s forwards";
            bubble.innerHTML = msg.text;
            if(msg.future){
                const span = document.createElement("span");
                span.classList.add("future");
                span.innerText = msg.future;
                bubble.appendChild(span);
            }
            chat.appendChild(bubble);

            // Add small animated heart emojis to bubbles
            const heart = document.createElement("span");
            heart.classList.add("emoji");
            heart.innerText = "💖";
            bubble.appendChild(heart);
        }, delay);
        delay += 1500;
    });
}
