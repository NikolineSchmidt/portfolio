document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const folderTabs = document.querySelector(".folder-tabs");

    burger.addEventListener("click", function () {
        folderTabs.classList.toggle("active");
        burger.classList.toggle("active");
    });
});
