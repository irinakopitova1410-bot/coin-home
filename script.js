// Gestione Menu Laterale
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('active');
        console.log("Menu commutato");
    } else {
        console.error("Elemento 'side-menu' non trovato nell'HTML");
    }
}

// Chiudi il menu quando si clicca su un link
document.addEventListener('click', function(e) {
    if (e.target.closest('.side-drawer a')) {
        const menu = document.getElementById('side-menu');
        if (menu) menu.classList.remove('active');
    }
});

// Gestione Ricerca Ultra-Veloce
function openUltraSearch() {
    const modal = document.getElementById('search-overlay');
    const input = document.getElementById('ultra-search-input');
    
    if (modal && input) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
        
        setTimeout(() => {
            input.focus();
        }, 400);
    }
}

function closeUltraSearch() {
    const modal = document.getElementById('search-overlay');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Tasti rapidi: ESC per chiudere, INVIO per cercare
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeUltraSearch();
        const menu = document.getElementById('side-menu');
        if (menu) menu.classList.remove('active');
    }
    
    const input = document.getElementById('ultra-search-input');
    if (e.key === "Enter" && document.activeElement === input && input.value.trim() !== "") {
        alert("Accesso Archivio per: " + input.value.toUpperCase());
        closeUltraSearch();
    }
});
