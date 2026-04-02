function toggleSearch() {
    const el = document.getElementById('search-layer');
    el.style.display = (el.style.display === 'flex') ? 'none' : 'flex';
    setTimeout(() => el.classList.toggle('active'), 10);
}

function toggleLogin() {
    const el = document.getElementById('login-layer');
    el.style.display = (el.style.display === 'flex') ? 'none' : 'flex';
    setTimeout(() => el.classList.toggle('active'), 10);
}

function toggleMenu() {
    document.getElementById('side-layer').classList.toggle('active');
}
