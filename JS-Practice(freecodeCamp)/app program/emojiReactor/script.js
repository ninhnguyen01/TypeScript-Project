const btns = document.querySelectorAll(".emoji-btn");

btns.forEach(btn => {
    btn.addEventListener("click", () => updateCount(btn));
});

function updateCount(btn) {
    const countResult = btn.querySelector(".count");
    let currCount = +countResult.textContent.split("/")[0];
    if (currCount === 10) return;
    currCount++;
    countResult.textContent = `${currCount}/10`;
}

