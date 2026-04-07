function handleSearch() {
    const input = document.getElementById('search-input');
    
    // Se la barra è chiusa, la apriamo
    if (!input.classList.contains('active')) {
        input.classList.add('active');
        input.focus();
    } else {
        // Se è già aperta e c'è del testo, eseguiamo la ricerca
        if (input.value.trim() !== "") {
            executeSearch(input.value);
        } else {
            // Se è aperta ma vuota, la richiudiamo
            input.classList.remove('active');
        }
    }
}

// Funzione che simula la ricerca
function executeSearch(query) {
    console.log("Ricerca in corso per:", query);
    alert("Ricerca VIP per: " + query); 
    // Qui potrai aggiungere il filtro reale dei prodotti
}

// Permette di premere INVIO sulla tastiera
document.getElementById('search-input')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        executeSearch(this.value);
    }
});
// Funzione per aprire/chiudere il menu laterale
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Funzione per la ricerca ultra-moderna (Blur)
function openUltraSearch() {
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('ultra-search-input');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Blocca lo scroll
        setTimeout(() => input.focus(), 400);
    }
}

function closeUltraSearch() {
    const overlay = document.getElementById('search-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

// Chiudi con il tasto ESC o esegui ricerca con INVIO
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeUltraSearch();
    
    const input = document.getElementById('ultra-search-input');
    if (e.key === "Enter" && document.activeElement === input && input.value !== "") {
        console.log("Ricerca Ultra-Veloce per:", input.value);
        // Qui puoi reindirizzare ai risultati o filtrare i prodotti
        alert("Accesso all'archivio per: " + input.value);
    }
});
