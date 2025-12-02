function showChapter() {
    // hide step1 completely
    document.getElementById("step1").style.display = "none";

    // show chapter
    const chapter = document.getElementById("chapter");
    chapter.style.display = "block";

    // populate chat
    const chat = document.getElementById("chat");
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
