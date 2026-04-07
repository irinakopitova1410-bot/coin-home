/* --- SCRIPT DEFINITIVO STYLE ZARA --- */

// 1. FUNZIONE APERTURA/CHIUSURA MENU LATERALE
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu) {
        sideMenu.classList.toggle('active');
        // Se apriamo il menu, chiudiamo la barra di ricerca per ordine visivo
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.classList.remove('open');
    }
}

// 2. FUNZIONE BARRA DI RICERCA INTERATTIVA
function openSearch() {
    const input = document.getElementById('search-input');
    if (input) {
        input.classList.toggle('open');
        if (input.classList.contains('open')) {
            input.focus(); // Porta il cursore dentro la barra appena appare
        } else {
            input.value = ""; // Pulisce il testo se la chiudiamo
        }
    }
}

// 3. GESTIONE DEI CLIC ESTERNI (Per chiudere menu o ricerca se clicchi fuori)
document.addEventListener('click', function(event) {
    const sideMenu = document.getElementById('side-menu');
    const menuBtn = document.querySelector('.header-left');
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.getElementById('search-input');

    // Chiudi il Menu se clicchi fuori dal pannello nero
    if (sideMenu && sideMenu.classList.contains('active')) {
        if (!sideMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            sideMenu.classList.remove('active');
        }
    }
    
    // Chiudi la Ricerca se clicchi altrove (e la barra è vuota)
    if (searchInput && searchInput.classList.contains('open')) {
        if (!searchContainer.contains(event.target) && searchInput.value === "") {
            searchInput.classList.remove('open');
        }
    }
});

// 4. INVIO DELLA RICERCA (Premendo il tasto Invio sulla tastiera)
document.addEventListener('keydown', function(e) {
    const input = document.getElementById('search-input');
    if (e.key === 'Enter' && input && input.classList.contains('open') && input.value.trim() !== "") {
        alert("Stai cercando: " + input.value);
        // Qui potrai inserire la logica per filtrare i tuoi prodotti
    }
});
