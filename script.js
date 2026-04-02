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
function toggleLogin() {
    const login = document.getElementById('login-overlay');
    if (login) {
        login.classList.toggle('active');
        
        // Gestione scroll del corpo pagina
        if (login.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}
