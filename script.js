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

function showAppPopup() {
    const popup = document.getElementById('app-popup');
    if (popup) {
        popup.style.display = 'flex';
        setTimeout(() => popup.classList.add('active'), 10);
        document.body.style.overflow = 'hidden'; // Blocca lo scroll dietro
    }
}

function closeAppPopup() {
    const popup = document.getElementById('app-popup');
    if (popup) {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto'; // Riattiva lo scroll
        }, 400);
    }
}

// Mostra il pop-up automaticamente dopo 3 secondi (Zara Style)
window.addEventListener('load', () => {
    if (!localStorage.getItem('popupShown')) {
        setTimeout(showAppPopup, 3000);
        localStorage.setItem('popupShown', 'true'); // Lo mostra solo una volta per sessione
    }
});

// Chiudi se si clicca fuori dal quadrato bianco
window.addEventListener('click', (e) => {
    const popup = document.getElementById('app-popup');
    if (e.target === popup) closeAppPopup();
});
