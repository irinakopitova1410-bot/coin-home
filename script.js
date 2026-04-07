function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Chiudi se clicchi fuori
document.addEventListener('click', function(e) {
    const menu = document.getElementById('side-menu');
    const btn = document.querySelector('.header-left');
    if (menu && menu.classList.contains('active')) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('active');
        }
    }
});
