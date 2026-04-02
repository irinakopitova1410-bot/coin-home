function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('active');
}

function toggleSearch() {
    const search = document.getElementById('search-overlay');
    search.classList.toggle('active');
    if(search.classList.contains('active')) {
        setTimeout(() => document.getElementById('search-input').focus(), 200);
    }
}

function toggleLogin() {
    const login = document.getElementById('login-overlay');
    login.classList.toggle('active');
}
