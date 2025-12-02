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

    // Chat messages with avatars and emojis
    const messages = [
        { avatar:"https://i.imgur.com/JS2rIxl.png", text:"Add me to the class group CR 📝✨", side:"left", future:"👩‍🎓 (Future ME: add me to your heart BUBU 💖😘)"},
        { avatar:"https://i.imgur.com/8M2kMsd.png", text:"First ask permission from HOD, you are not in the list 🤨📋", side:"right"}
    ];

    let delay = 500;
    messages.forEach(msg => {
        setTimeout(() => {
            const row = document.createElement("div");
            row.classList.add("chat-row");

            // Avatar
            const avatar = document.createElement("img");
            avatar.src = msg.avatar;
            avatar.classList.add("avatar");

            // Bubble
            const bubble = document.createElement("div");
            bubble.classList.add("bubble", msg.side);
            bubble.innerHTML = msg.text;

            // Future span if exists
            if(msg.future){
                const span = document.createElement("span");
                span.classList.add("future");
                span.innerText = msg.future;
                bubble.appendChild(span);
            }

            // Add small animated heart emoji
            const heart = document.createElement("span");
            heart.classList.add("emoji");
            heart.innerText = "💖";
            bubble.appendChild(heart);

            // Arrange avatar and bubble depending on side
            if(msg.side==="left"){
                row.appendChild(avatar);
                row.appendChild(bubble);
            } else {
                row.appendChild(bubble);
                row.appendChild(avatar);
            }

            chat.appendChild(row);

        }, delay);
        delay += 1800; // next message delay
    });
}
