// Når DOM'en er fuldt indlæst, aktiverer denne kode burger-menuen og skifter visningen af folder-tabs ved klik.
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger"); // Hent burger-menuen
    const folderTabs = document.querySelector(".folder-tabs"); // Hent folder-tabs

    // Tilføjer eventlistener, der aktiverer/deaktiverer 'active' class ved klik på burger-menuen
    burger.addEventListener("click", function () {
        folderTabs.classList.toggle("active"); // Skift 'active' class på folder-tabs
        burger.classList.toggle("active"); // Skift 'active' class på burger-menuen
    });
});
