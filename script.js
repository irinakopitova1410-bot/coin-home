function openUltraSearch() {
    const modal = document.getElementById('search-overlay');
    const input = document.getElementById('ultra-search-input');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Blocca lo scroll sotto
    
    setTimeout(() => {
        input.focus(); // Mette il cursore pronto per scrivere
    }, 400);
}

function closeUltraSearch() {
    const modal = document.getElementById('search-overlay');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Riattiva lo scroll
}

// Chiudi con tasto ESC o cerca con INVIO
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeUltraSearch();
    
    const input = document.getElementById('ultra-search-input');
    if (e.key === "Enter" && document.activeElement === input && input.value !== "") {
        alert("Accesso Archivio per: " + input.value.toUpperCase());
        closeUltraSearch();
    }
});
