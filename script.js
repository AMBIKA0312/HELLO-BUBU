let current = 1;

function showChapter(n) {
    document.querySelectorAll(".chapter").forEach(c => c.style.display = "none");
    document.getElementById(`chapter${n}`).style.display = "block";
}

function nextChapter() {
    current++;
    if (current > 3) current = 1;
    showChapter(current);
}

showChapter(1);
