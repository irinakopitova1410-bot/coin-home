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
// Cambia layout griglia (Zara Style)
function toggleGridLayout() {
    const grid = document.getElementById('products-grid');
    const dot = document.getElementById('grid-dot');
    
    if (grid && dot) {
        grid.classList.toggle('grid-wide'); // Cambia colonne
        dot.classList.toggle('dot-left');  // Muove il pallino
    }
}

// Placeholder per Filtri e Ordina
function openFilters() {
    console.log("Filtri aperti");
    alert("Funzionalità FILTRI in arrivo.");
}

function openSort() {
    console.log("Ordinamento aperto");
    alert("Funzionalità ORDINA in arrivo.");
}

// Gestione Ricerca (già configurata prima)
function openUltraSearch() {
    const modal = document.getElementById('search-overlay');
    if (modal) modal.classList.add('active');
}
