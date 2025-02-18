function animateOnScroll() {
    const noteContainers = document.querySelectorAll('.note-container.message'); // Vælg alle .note-container

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Tilføj klassen, når elementet er i viewporten
                observer.unobserve(entry.target); // Stop med at observere efter animationen er udløst
            }
        });
    }, {
        threshold: 0.5 // Udløs animationen, når 50% af elementet er synligt
    });

    // Observer hvert .note-container
    noteContainers.forEach(container => {
        observer.observe(container);
    });
}

// Kald funktionen, når siden indlæses
window.addEventListener('load', animateOnScroll);