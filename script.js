function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

function toggleSearch() {
    const overlay = document.getElementById('search-overlay');
    overlay.classList.toggle('active');
    if(overlay.classList.contains('active')) {
        document.getElementById('search-input').focus();
    }
}

function closeAppPopup() {
    document.getElementById('app-popup').classList.remove('active');
}

// Mostra il pop-up dopo 2 secondi
window.onload = () => {
    setTimeout(() => {
        const popup = document.getElementById('app-popup');
        if(popup) popup.classList.add('active');
    }, 2000);
};
