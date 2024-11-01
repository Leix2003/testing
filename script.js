const button = document.getElementById("button");
const message = document.getElementById("message");
const nextButton = document.getElementById("next-button");

button.addEventListener("click", () => {
    message.textContent = "Sebenarnya, saya dah lama sayang awak.";
    button.classList.add("hidden"); // Sembunyikan butang pertama
    nextButton.style.display = "inline-block"; // Tampilkan butang Next
});

nextButton.addEventListener("click", () => {
    message.textContent = "Saya gurau je";
    nextButton.classList.add("hidden"); // Sembunyikan butang Next
});