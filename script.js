/* --- 1. GESTIONE MENU LATERALE (HOME) --- */
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

/* --- 2. GESTIONE FILTRI (NUOVI ARRIVI) --- */
function openFilters() {
    const menu = document.getElementById('filter-menu');
    if (menu) {
        menu.classList.add('active');
    }
}

function closeFilters() {
    const menu = document.getElementById('filter-menu');
    if (menu) {
        menu.classList.remove('active');
    }
}

/* --- 3. LOGICA FILTRAGGIO PRODOTTI --- */
function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');
    
    products.forEach(product => {
        const pCat = product.getAttribute('data-category');
        // Se la categoria è 'all' (NUOVI ARRIVI) o coincide, mostra
        if (category === 'all' || pCat === category) {
            product.style.display = 'block';
            product.style.opacity = '1';
        } else {
            product.style.display = 'none';
            product.style.opacity = '0';
        }
    });

    closeFilters(); // Chiude il pannello dopo la scelta
}

/* --- 4. GESTIONE RICERCA --- */
function openUltraSearch() {
    const modal = document.getElementById('search-overlay');
    const input = document.getElementById('ultra-search-input');
    if (modal) {
        modal.classList.add('active');
        if (input) setTimeout(() => input.focus(), 300);
    }
}

function closeUltraSearch() {
    const modal = document.getElementById('search-overlay');
    if (modal) modal.classList.remove('active');
}

/* --- 5. GESTIONE ORDINA --- */
function openSort() {
    const menu = document.getElementById('sort-menu');
    if (menu) menu.classList.add('active');
}

function closeSort() {
    const menu = document.getElementById('sort-menu');
    if (menu) menu.classList.remove('active');
}

/* --- 6. LAYOUT GRIGLIA (PALLINO ZARA) --- */
function toggleGridLayout() {
    const grid = document.getElementById('products-grid');
    const dot = document.getElementById('grid-dot');
    if (grid && dot) {
        grid.classList.toggle('grid-wide');
        dot.classList.toggle('dot-left');
    }
}

/* --- 7. CHIUSURA CON TASTO ESC --- */
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeFilters();
        closeSort();
        closeUltraSearch();
        const sideMenu = document.getElementById('side-menu');
        if (sideMenu) sideMenu.classList.remove('active');
    }
});
