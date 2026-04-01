function toggleMenu(show) {
    const menu = document.getElementById('side-menu');
    const overlay = document.getElementById('body-overlay');
    
    if(show) {
        menu.classList.add('active');
        overlay.style.display = 'block';
        setTimeout(() => overlay.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
    } else {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        setTimeout(() => overlay.style.display = 'none', 400);
        document.body.style.overflow = 'auto';
    }
}

function toggleSearch(show) {
    const searchOverlay = document.getElementById('search-overlay');
    if(show) {
        searchOverlay.style.display = 'flex';
        document.getElementById('main-search-input').focus();
        document.body.style.overflow = 'hidden';
    } else {
        searchOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Chiudi con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        toggleMenu(false);
        toggleSearch(false);
    }
});
