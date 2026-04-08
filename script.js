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
// Funzione per filtrare i prodotti con effetto fade
function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');
    
    products.forEach(product => {
        // Logica: se la categoria coincide o è 'all', mostra; altrimenti nascondi.
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
            setTimeout(() => { product.style.opacity = '1'; }, 10);
        } else {
            product.style.opacity = '0';
            setTimeout(() => { product.style.display = 'none'; }, 400);
        }
    });

    closeFilters(); // Chiude il menu dopo la scelta
}

// Apertura e Chiusura Menu (Senza alert!)
function openFilters() {
    const menu = document.getElementById('filter-menu');
    if (menu) menu.classList.add('active');
}

function closeFilters() {
    const menu = document.getElementById('filter-menu');
    if (menu) menu.classList.remove('active');
}

// Gestione ORDINA
function openSort() {
    const menu = document.getElementById('sort-menu');
    if (menu) menu.classList.add('active');
}

function closeSort() {
    const menu = document.getElementById('sort-menu');
    if (menu) menu.classList.remove('active');
}

// Chiudi tutto con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeFilters();
        closeSort();
    }
});

// Gestione Ricerca (già configurata prima)
function openUltraSearch() {
    const modal = document.getElementById('search-overlay');
    if (modal) modal.classList.add('active');
}
// Gestione Menu Laterali (Filtri/Ordina)
function openFilters() {
    const menu = document.getElementById('filter-menu');
    if (menu) menu.classList.add('active');
}

function closeFilters() {
    const menu = document.getElementById('filter-menu');
    if (menu) menu.classList.remove('active');
}

function openSort() {
    const menu = document.getElementById('sort-menu');
    if (menu) menu.classList.add('active');
}

function closeSort() {
    const menu = document.getElementById('sort-menu');
    if (menu) menu.classList.remove('active');
}

// Visualizzazione Zara (Pallino)
function toggleGridLayout() {
    const grid = document.getElementById('products-grid');
    const dot = document.getElementById('grid-dot');
    if(grid && dot) {
        grid.classList.toggle('grid-wide');
        dot.classList.toggle('dot-left');
    }
}
function openFilters() {
    document.getElementById('filter-menu').classList.add('active');
}

function closeFilters() {
    document.getElementById('filter-menu').classList.remove('active');
}

function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');
    products.forEach(p => {
        const cat = p.getAttribute('data-category');
        if (category === 'all' || cat === category) {
            p.style.display = 'block';
        } else {
            p.style.display = 'none';
        }
    });
    closeFilters();
}
function openFilters() {
    document.getElementById('filter-menu').classList.add('active');
}
function closeFilters() {
    document.getElementById('filter-menu').classList.remove('active');
}
function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');
    products.forEach(p => {
        const pCat = p.getAttribute('data-category');
        if (category === 'all' || pCat === category) {
            p.style.display = 'block';
        } else {
            p.style.display = 'none';
        }
    });
    closeFilters();
}
// Funzione per APRIRE il menu filtri
function openFilters() {
    const menu = document.getElementById('filter-menu');
    if (menu) {
        menu.classList.add('active');
    }
}
// Funzione per CHIUDERE il menu filtri
function closeFilters() {
    const menu = document.getElementById('filter-menu');
    if (menu) {
        menu.classList.remove('active');
    }
}
// Funzione per FILTRARE (e gestire "NUOVI ARRIVI")
function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');
    
    products.forEach(product => {
        const pCat = product.getAttribute('data-category');
        if (category === 'all' || pCat === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    closeFilters(); // Chiude il menu dopo il click
}
