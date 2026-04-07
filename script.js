// Funzione Ricerca
function openUltraSearch() {
    const modal = document.getElementById('search-overlay');
    const input = document.getElementById('ultra-search-input');
    if (modal) {
        modal.classList.add('active');
        setTimeout(() => input.focus(), 300);
    }
}

function closeUltraSearch() {
    const modal = document.getElementById('search-overlay');
    if (modal) modal.classList.remove('active');
}

// Funzione Menu (se presente nell'header)
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) menu.classList.toggle('active');
}

// Chiudi tutto con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeUltraSearch();
});
