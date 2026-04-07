function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('active');
}

function openSearch() {
    const search = document.getElementById('search-overlay');
    search.classList.add('active');
    setTimeout(() => { document.getElementById('search-input').focus(); }, 100);
}

function closeSearch() {
    const search = document.getElementById('search-overlay');
    search.classList.remove('active');
}

// Chiudi tutto con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeSearch();
        document.getElementById('side-menu').classList.remove('active');
    }
});
