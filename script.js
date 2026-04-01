function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

function toggleSearch() {
    document.getElementById('search-overlay').classList.toggle('active');
}

function closeAppPopup() {
    document.getElementById('app-popup').classList.remove('active');
}

// Mostra pop-up dopo 3 secondi
window.onload = () => {
    setTimeout(() => {
        document.getElementById('app-popup').classList.add('active');
    }, 3000);
};
