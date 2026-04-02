function toggleSearch() {
    const el = document.getElementById('search-overlay');
    el.classList.toggle('active');
    if(el.classList.contains('active')) {
        setTimeout(() => document.getElementById('search-input').focus(), 100);
    }
}

function toggleLogin() {
    document.getElementById('login-overlay').classList.toggle('active');
}

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}
