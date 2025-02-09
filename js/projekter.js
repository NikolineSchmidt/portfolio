document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtns = document.querySelectorAll(".read-more-btn");

    readMoreBtns.forEach(function(readMoreBtn) {
        const noteText = readMoreBtn.previousElementSibling; // Assuming .note-text is right before the button

        // Set the initial icon
        readMoreBtn.innerHTML = '<i class="fa-solid fa-angle-down"></i>';

        readMoreBtn.addEventListener("click", function() {
            noteText.classList.toggle("expanded");
            if (noteText.classList.contains("expanded")) {
                readMoreBtn.innerHTML = '<i class="fa-solid fa-angle-up"></i>'; // "Læs mindre"
            } else {
                readMoreBtn.innerHTML = '<i class="fa-solid fa-angle-down"></i>'; // "Læs mere"
            }
        });
    });
});
