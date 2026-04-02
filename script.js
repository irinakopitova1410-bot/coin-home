function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

function toggleSearch() {
    document.getElementById('search-overlay').classList.toggle('active');
}

function closePopup() {
    document.getElementById('app-popup').classList.remove('active');
}

// Mostra il pop-up dell'app dopo 2 secondi
window.onload = () => {
    setTimeout(() => {
        document.getElementById('app-popup').classList.add('active');
    }, 2000);
};
