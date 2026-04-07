// FUNZIONE PER APRIRE E CHIUDERE IL MENU
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// CHIUDI IL MENU SE CLICCHI FUORI
document.addEventListener('click', function(event) {
    const menu = document.getElementById('side-menu');
    const menuBtn = document.querySelector('.header-left');
    
    if (menu && menu.classList.contains('active')) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove('active');
        }
    }
});







