const messages = [
    "LAHHHHH?",
    "LAHHHHHHHHHHHHHHH? ??",
    "haha ayos isa pa",
    "ayos. hindi mo na ko mahal. tandaan mo to",
    "AYOS NESSA.",
    "isa pa sisipain kita",
    "i love you nessa",
    "I LOVE YOU NESSA",
    "GEH PUMARAOS NA SANA SI NIPNIP.",
    "jokjok hahha i love you nessa"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
