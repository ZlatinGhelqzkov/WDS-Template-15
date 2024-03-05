// Function to toggle the visibility of the language menu
function openLanguageFooter() {
    let languageMenu = document.querySelector('.footer-lang-menu');
    languageMenu.classList.toggle('footer-lang-show');
    let langChosen = document.querySelector('.footer-lang-chosen');
    langChosen.classList.toggle('footer-lang-chosen-active');
    let languageMenuShape = document.querySelector('.footer-lang-menu-shape');
    languageMenuShape.classList.toggle('footer-show-shape');
}

// Function to change the language
function changeLanguageFooter(event) {
    let chosenLanguage = document.querySelector('.footer-lang-chosen span');
    let otherLanguage = document.querySelector('.lang-chosen span');
    chosenLanguage.textContent = event.target.textContent;
    otherLanguage.textContent = event.target.textContent;
    openLanguageFooter(); // This will close the menu after selection
}

// Event listener for the button
document.querySelector('.footer-lang-chosen').addEventListener('click', openLanguageFooter);

// Event listeners for each language choice
let languageItemsFooter = document.querySelectorAll('.footer-lang-item');
languageItemsFooter.forEach(function(choice) {
    choice.addEventListener('click', changeLanguageFooter);
});
