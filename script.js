function toggleSearch() {
    const s = document.getElementById('search-overlay');
    s.classList.toggle('active');
    if(s.classList.contains('active')) {
        setTimeout(() => document.getElementById('search-input').focus(), 400);
    }
}

function toggleLogin() {
    document.getElementById('login-overlay').classList.toggle('active');
}
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    const backdrop = document.getElementById('menu-backdrop');
    
    menu.classList.toggle('active');
    
    if (backdrop) {
        backdrop.classList.toggle('active');
    }

    // Blocca lo scroll del body per un'esperienza app fluida
    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}











