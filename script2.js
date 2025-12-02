window.showChapter = function() {
    document.getElementById("step1").style.display = "none"; // hide Step 1
    chapter.style.display = "block"; // show CH01

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

            if(msg.side==="left"){
                row.appendChild(avatar);
                row.appendChild(bubble);
            } else {
                row.appendChild(bubble);
                row.appendChild(avatar);
            }

            chat.appendChild(row);

            // Show Next button after last message
            if(index === messages.length - 1){
                document.getElementById("chapterNextBtn").style.display = "inline-block";
            }

        }, delay);
        delay += 1800;
    });
}

// Function to go to page 3
window.goPage3 = function() {
    window.location.href = "page3.html"; // Change this to your actual Page 3 file
}
