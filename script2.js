document.addEventListener("DOMContentLoaded", () => {
    const choiceResult = document.getElementById("choiceResult");
    const nextBtn = document.getElementById("nextBtn");
    const choiceButtons = document.getElementById("choiceButtons");
    const chapter = document.getElementById("chapter");
    const chat = document.getElementById("chat");

    window.choiceYes = function() {
        choiceResult.style.color = "#ff007f";
        choiceResult.innerHTML = "Nice choice 😘";
        nextBtn.style.display = "inline-block";
        choiceButtons.style.display = "none";
    }

    window.choiceNo = function() {
        choiceResult.style.color = "red";
        choiceResult.innerHTML = "What! I will still show you 😏";
        nextBtn.style.display = "inline-block";
        choiceButtons.style.display = "none";
    }

    window.showChapter = function() {
        document.getElementById("step1").style.display = "none"; // hide Step 1
        chapter.style.display = "block"; // show CH01

        const messages = [
            { avatar:"https://i.imgur.com/JS2rIxl.png", text:"Add me to the class group CR 📝✨", side:"left", future:"👩‍🎓 (Future ME: add me to your heart BUBU 💖😘)"},
            { avatar:"https://i.imgur.com/8M2kMsd.png", text:"First ask permission from HOD, you are not in the list 🤨📋", side:"right"}
        ];

        let delay = 500;
        messages.forEach(msg => {
            setTimeout(() => {
                const row = document.createElement("div");
                row.classList.add("chat-row");

                const avatar = document.createElement("img");
                avatar.src = msg.avatar;
                avatar.classList.add("avatar");

                const bubble = document.createElement("div");
                bubble.classList.add("bubble", msg.side);
                bubble.innerHTML = msg.text;

                if(msg.future){
                    const span = document.createElement("span");
                    span.classList.add("future");
                    span.innerText = msg.future;
                    bubble.appendChild(span);
                }

                const heart = document.createElement("span");
                heart.classList.add("emoji");
                heart.innerText = "💖";
                bubble.appendChild(heart);

                if(msg.side==="left"){
                    row.appendChild(avatar);
                    row.appendChild(bubble);
                } else {
                    row.appendChild(bubble);
                    row.appendChild(avatar);
                }

                chat.appendChild(row);
            }, delay);
            delay += 1800;
        });
    }
});
