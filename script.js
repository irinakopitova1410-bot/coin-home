function toggleSearch() {
    const search = document.getElementById('search-overlay');
    search.classList.toggle('active');
    if(search.classList.contains('active')) {
        setTimeout(() => document.getElementById('search-input').focus(), 100);
    }
}

function toggleLogin() {
    document.getElementById('login-overlay').classList.toggle('active');
}

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}
