// --- 1. GESTIONE MENU LATERALE (HOME) ---
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// --- 2. GESTIONE FILTRI (NUOVI ARRIVI) ---
function openFilters() {
    const filterMenu = document.getElementById('filter-menu');
    if (filterMenu) {
        filterMenu.classList.add('active');
    }
}

function closeFilters() {
    const filterMenu = document.getElementById('filter-menu');
    if (filterMenu) {
        filterMenu.classList.remove('active');
    }
}

function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');
    
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
            setTimeout(() => { product.style.opacity = '1'; }, 10);
        } else {
            product.style.opacity = '0';
            product.style.display = 'none';
        }
    });

    closeFilters(); // Chiude il menu dopo la scelta
}

// --- 3. GESTIONE RICERCA (ULTRA SEARCH) ---
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
    if (modal) {
        modal.classList.remove('active');
    }
}

// --- 4. LAYOUT GRIGLIA (ZARA STYLE) ---
function toggleGridLayout() {
    const grid = document.getElementById('products-grid');
    const dot = document.getElementById('grid-dot');
    if (grid) {
        grid.classList.toggle('grid-wide'); // Cambia colonne nel CSS
    }
    if (dot) {
        dot.classList.toggle('active');
    }
}

// Chiudi tutto con il tasto ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeFilters();
        closeUltraSearch();
        const sideMenu = document.getElementById('side-menu');
        if(sideMenu) sideMenu.classList.remove('active');
    }
});
