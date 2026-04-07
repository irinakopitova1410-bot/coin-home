// --- FUNZIONE MENU ---
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('active');
        console.log("Menu cliccato");
    } else {
        console.error("ERRORE: Non trovo l'elemento con id 'side-menu'");
    }
}

// --- FUNZIONE RICERCA ---
function openUltraSearch() {
    const overlay = document.getElementById('search-overlay');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            document.getElementById('ultra-search-input')?.focus();
        }, 400);
    } else {
        console.error("ERRORE: Non trovo l'elemento con id 'search-overlay'");
    }
}

function closeUltraSearch() {
    const overlay = document.getElementById('search-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Chiudi tutto con il tasto ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeUltraSearch();
        document.getElementById('side-menu')?.classList.remove('active');
    }
});
