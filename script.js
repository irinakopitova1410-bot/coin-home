document.addEventListener('DOMContentLoaded', () => {
    console.log("Script caricato e pronto!");
});

function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('active');
        console.log("Menu commutato");
    }
}

function toggleSearch() {
    const search = document.getElementById('search-overlay');
    if (search) {
        search.classList.toggle('active');
        if(search.classList.contains('active')) {
            document.getElementById('search-input').focus();
        }
    }
}

function toggleLogin() {
    const login = document.getElementById('login-overlay');
    if (login) {
        login.classList.toggle('active');
    }
}
