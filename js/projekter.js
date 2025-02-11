document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtns = document.querySelectorAll(".read-more-btn");

    readMoreBtns.forEach(function(readMoreBtn) {
        const noteText = readMoreBtn.previousElementSibling;

        readMoreBtn.innerHTML = '<i class="fa-solid fa-angle-down"></i>';

        readMoreBtn.addEventListener("click", function() {
            noteText.classList.toggle("expanded");
            if (noteText.classList.contains("expanded")) {
                readMoreBtn.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
            } else {
                readMoreBtn.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
            }
        });
    });

    let slideIndex = 0;

    function moveSlide(n) {
        const slides = document.querySelectorAll('.carousel-item');
        slideIndex += n;
        
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        
        const newTransformValue = -slideIndex * 100;
        document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
        console.log("Slide moved to index:", slideIndex); // Tilføj denne linje for at bekræfte, at funktionen bliver kaldt
    }

    // Tilføj event listeners til knapperne
    document.querySelector('.carousel-prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.carousel-next').addEventListener('click', () => moveSlide(1));
});