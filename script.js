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

function toggleMenu() {
    // Se hai un menu laterale, aggiungi l'ID 'side-menu'
    const m = document.getElementById('side-menu');
    if(m) m.classList.toggle('active');
}
















