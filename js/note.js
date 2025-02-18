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

function showMockup(type) {
    // Skjul alle mockups
    document.querySelectorAll('.figma-mockup').forEach(mockup => {
        mockup.classList.add('hidden');
    });

    // Vis den valgte mockup
    document.getElementById(`${type}-mockup`).classList.remove('hidden');

    // Opdater knappernes aktiv tilstand
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-btn[onclick="showMockup('${type}')"]`).classList.add('active');
}

function openFigma(type) {
    if (type === 'desktop') {
        window.open("https://www.figma.com/design/OReMcASS52cTpf0Meyfrbb/zerobuzzbrew-desktop-mockup-nikoline?node-id=0-1&p=f&t=Rb2gWtqTTGkBgihS-0", "_blank");
    } else if (type === 'mobile') {
        window.open("https://www.figma.com/design/1mhFQxIx4HxIHEAgSJZ69c/zerobuzzbrew-mobil-mockup-nikoline?node-id=0-1&p=f&t=kkgffl0nubX2yyYw-0", "_blank");
    }
}