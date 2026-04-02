function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

function toggleSearch() {
    const searchOverlay = document.getElementById('search-overlay');
    searchOverlay.classList.toggle('active');
    
    const input = document.getElementById('search-input');
    
    if (searchOverlay.classList.contains('active')) {
        // Aspettiamo la fine dell'animazione per dare il focus
        setTimeout(() => {
            input.focus();
        }, 400);
        document.body.style.overflow = 'hidden'; // Blocca lo scroll del sito
    } else {
        input.value = ''; // Pulisce la ricerca quando chiudi
        document.body.style.overflow = 'auto';
    }
}
function toggleLogin() {
    document.getElementById('login-overlay').classList.toggle('active');
}
