// script.js
document.getElementById('en-btn').addEventListener('click', function() {
    showLanguage('en');
});

document.getElementById('pt-btn').addEventListener('click', function() {
    showLanguage('pt');
});

document.getElementById('dark-mode-btn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function showLanguage(lang) {
    const elements = document.querySelectorAll(`.${lang}`);
    const otherLang = lang === 'en' ? 'pt' : 'en';
    const otherElements = document.querySelectorAll(`.${otherLang}`);

    elements.forEach(el => {
        el.style.display = 'block';
    });

    otherElements.forEach(el => {
        el.style.display = 'none';
    });
}