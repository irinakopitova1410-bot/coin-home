function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Chiudi se clicchi fuori
document.addEventListener('click', function(e) {
    const menu = document.getElementById('side-menu');
    const btn = document.querySelector('.header-left');
    if (menu && menu.classList.contains('active')) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('active');
        }
    }
});

function openSearch() {
    const input = document.getElementById('search-input');
    input.classList.toggle('open');
    input.focus(); // Mette subito il cursore per scrivere
}

// Se l'utente preme INVIO mentre scrive
document.getElementById('search-input')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        alert('Stai cercando: ' + this.value);
        // Qui potrai collegare la ricerca vera ai tuoi prodotti
    }
});
