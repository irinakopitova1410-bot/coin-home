// Funzione per il MENU (corretta con f minuscola)
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('active');
        console.log("Menu attivato correttamente");
    } else {
        console.error("Errore: Non trovo l'elemento con id 'side-menu'");
    }
}

// Funzione per la RICERCA
function openUltraSearch() {
    const modal = document.getElementById('search-overlay');
    const input = document.getElementById('ultra-search-input');
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
        if (input) setTimeout(() => input.focus(), 400);
    }
}

function closeUltraSearch() {
    const modal = document.getElementById('search-overlay');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Chiudi con tasto ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeUltraSearch();
        document.getElementById('side-menu')?.classList.remove('active');
    }
});
