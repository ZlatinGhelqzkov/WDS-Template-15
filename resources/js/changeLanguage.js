// Function to toggle the visibility of the language menu
function openLanguage() {
    let languageMenu = document.querySelector('.lang-menu');
    languageMenu.classList.toggle('show');
    let langChosen = document.querySelector('.lang-chosen');
    langChosen.classList.toggle('lang-chosen-active');
    let languageMenuShape = document.querySelector('.lang-menu-shape');
    languageMenuShape.classList.toggle('show-shape');
}

// Function to change the language
function changeLanguage(event) {
    let chosenLanguage = document.querySelector('.lang-chosen span');
    let otherLanguage = document.querySelector('.footer-lang-chosen span');
    chosenLanguage.textContent = event.target.textContent;
    otherLanguage.textContent = event.target.textContent;
    openLanguage(); // This will close the menu after selection
}

// Event listener for the button
document.querySelector('.lang-chosen').addEventListener('click', openLanguage);

// Event listeners for each language choice
let languageItems = document.querySelectorAll('.lang-item');
languageItems.forEach(function(choice) {
    choice.addEventListener('click', changeLanguage);
});
