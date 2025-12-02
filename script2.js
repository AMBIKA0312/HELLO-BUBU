document.addEventListener("DOMContentLoaded", function() {

    // Elements
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const nextBtn = document.getElementById("nextBtn");
    const choiceButtons = document.getElementById("choiceButtons");
    const choiceResult = document.getElementById("choiceResult");
    const chapter = document.getElementById("chapter");
    const chat = document.getElementById("chat");
    const chapterNextBtn = document.getElementById("chapterNextBtn");

    // Reset state (important for revisiting)
    choiceResult.innerHTML = "";
    nextBtn.style.display = "none";
    chapterNextBtn.style.display = "none";
    choiceButtons.style.display = "block";
    chat.innerHTML = "";
    document.getElementById("step1").style.display = "block";
    chapter.style.display = "none";

    // Remove existing listeners to avoid duplicates (safety)
    yesBtn.replaceWith(yesBtn.cloneNode(true));
    noBtn.replaceWith(noBtn.cloneNode(true));
    nextBtn.replaceWith(nextBtn.cloneNode(true));
    chapterNextBtn.replaceWith(chapterNextBtn.cloneNode(true));

    // Re-assign elements after clone
    const yesButton = document.getElementById("yesBtn");
    const noButton = document.getElementById("noBtn");
    const nextButton = document.getElementById("nextBtn");
    const chapterNextButton = document.getElementById("chapterNextBtn");

    // Yes button
    yesButton.addEventListener("click", function() {
        choiceResult.style.color = "#ff007f";
        choiceResult.innerHTML = "Nice choice 😘";
        nextButton.style.display = "inline-block";
        choiceButtons.style.display = "none";
    });

    // No button
    noButton.addEventListener("click", function() {
        choiceResult.style.color = "red";
        choiceResult.innerHTML = "What! I will still show you 😏";
        nextButton.style.display = "inline-block";
        choiceButtons.style.display = "none";
    });

    // Next button to show CH01
    nextButton.addEventListener("click", function() {
        document.getElementById("step1").style.display = "none";
        chapter.style.display = "block";
        showChapterChat();
    });

    // CH01 chat messages
    function showChapterChat() {
        chat.innerHTML = "";

        const messages = [
            { avatar:"https://i.imgur.com/JS2rIxl.png", text:"Add me to the class group CR 📝✨", side:"left", future:"👩‍🎓 (Future ME: add me to your heart BUBU 💖😘)"},
            { avatar:"https://i.imgur.com/8M2kMsd.png", text:"First ask permission from HOD, you are not in the list 🤨📋", side:"right"}
        ];

        let delay = 500;
        messages.forEach((msg, index) => {
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

                if(msg.side === "left"){
                    row.appendChild(avatar);
                    row.appendChild(bubble);
                } else {
                    row.appendChild(bubble);
                    row.appendChild(avatar);
                }

                chat.appendChild(row);

                // Show CH01 Next button after last message
                if(index === messages.length - 1){
                    setTimeout(() => {
                        chapterNextButton.style.display = "inline-block";
                    }, 800);
                }

            }, delay);
            delay += 1800;
        });
    }

    // CH01 Next button → Page 3
    chapterNextButton.addEventListener("click", function() {
        window.location.href = "page3.html"; 
    });

});
