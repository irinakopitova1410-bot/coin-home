function toggleSearch() {
    const s = document.getElementById('search-overlay');
    s.classList.toggle('active');
    if(s.classList.contains('active')) document.getElementById('search-input').focus();
}

function toggleLogin() {
    const l = document.getElementById('login-overlay');
    l.classList.toggle('active');
}

function toggleMenu() {
    const m = document.getElementById('side-menu');
    if(m) m.classList.toggle('active');
}



















