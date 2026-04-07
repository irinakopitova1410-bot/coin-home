function openSearch() {
    const input = document.getElementById('search-input');
    input.classList.toggle('open');
    if (input.classList.contains('open')) {
        input.focus();
    }
}

function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) menu.classList.toggle('active');
}

// Chiudi la ricerca se clicchi fuori
document.addEventListener('click', function(e) {
    const container = document.querySelector('.search-container');
    const input = document.getElementById('search-input');
    if (!container.contains(e.target) && input.value === "") {
        input.classList.remove('open');
    }
});
