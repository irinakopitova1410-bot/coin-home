function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

function toggleSearch() {
    document.getElementById('search-overlay').classList.toggle('active');
    if(document.getElementById('search-overlay').classList.contains('active')) {
        setTimeout(() => document.getElementById('search-input').focus(), 300);
    }
}

function toggleLogin() {
    document.getElementById('login-overlay').classList.toggle('active');
}
