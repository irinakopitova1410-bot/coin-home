function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

function toggleSearch() {
    const s = document.getElementById('search-overlay');
    s.classList.toggle('active');
    if(s.classList.contains('active')) {
        setTimeout(() => document.getElementById('search-input').focus(), 400);
    }
}

function toggleLogin() {
    document.getElementById('login-overlay').classList.toggle('active');
}

// Chiudi tutto con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById('side-menu').classList.remove('active');
        document.getElementById('search-overlay').classList.remove('active');
        document.getElementById('login-overlay').classList.remove('active');
    }
});
