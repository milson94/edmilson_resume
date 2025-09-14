document.addEventListener('DOMContentLoaded', () => {
    const ptBtn = document.getElementById('pt-btn');
    const enBtn = document.getElementById('en-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');

    const elementsToToggle = [
        'h1', 'p', 'h2', 'h3', 'h4', 'ul', 'li', 'span', 'a'
    ];
    
    // Set initial language to English
    const setLanguage = (lang) => {
        const langElements = document.querySelectorAll(`[class$="${lang}"]`);
        const otherLang = lang === 'en' ? 'pt' : 'en';
        const otherLangElements = document.querySelectorAll(`[class$="${otherLang}"]`);
        
        langElements.forEach(el => el.style.display = 'block');
        otherLangElements.forEach(el => el.style.display = 'none');
    };

    enBtn.addEventListener('click', () => setLanguage('en'));
    ptBtn.addEventListener('click', () => setLanguage('pt'));

    // Set initial dark mode state
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    
    // Set initial icon based on the default state
    const icon = darkModeBtn.querySelector('i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    darkModeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Initial load language
    setLanguage('en');
});