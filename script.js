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
