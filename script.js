function toggleMenu(show) {
    const menu = document.getElementById('side-menu');
    if(show) menu.classList.add('active');
    else menu.classList.remove('active');
}

function toggleSearch(show) {
    const overlay = document.getElementById('search-overlay');
    if(show) {
        overlay.style.display = 'flex';
        setTimeout(() => { document.getElementById('main-search-input').focus(); }, 100);
    } else {
        overlay.style.display = 'none';
    }
}

// Chiudi tutto con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        toggleMenu(false);
        toggleSearch(false);
    }
});
