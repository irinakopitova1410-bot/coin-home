function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('active');
        console.log("Stato menu:", menu.classList.contains('active'));
    } else {
        console.error("Errore: Elemento side-menu non trovato!");
    }
}

// Chiudi il menu se clicchi ovunque fuori dal pannello
document.addEventListener('click', function(event) {
    const menu = document.getElementById('side-menu');
    const menuBtn = document.querySelector('.header-left');
    
    if (menu.classList.contains('active')) {
        // Se il clic NON è sul menu e NON è sul pulsante MENU, chiudi
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove('active');
        }
    }
});
