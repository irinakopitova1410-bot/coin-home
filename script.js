function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

function toggleSearch() {
    const el = document.getElementById('search-overlay');
    el.classList.toggle('active');
    if(el.classList.contains('active')) document.getElementById('search-input').focus();
}

function toggleLogin() {
    document.getElementById('login-overlay').classList.toggle('active');
}
