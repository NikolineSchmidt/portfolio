// script.js
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const folderTabs = document.getElementById('folder-tabs');

    burger.addEventListener('click', function() {
        folderTabs.classList.toggle('active');
    });
});
