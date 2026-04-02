function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('active');
    } else {
        console.error("Errore: Elemento 'side-menu' non trovato");
    }
}

function toggleSearch() {
    const search = document.getElementById('search-overlay');
    if (search) {
        search.classList.toggle('active');
        // Se si apre, metti il cursore nell'input
        if(search.classList.contains('active')) {
            setTimeout(() => {
                const input = document.getElementById('search-input');
                if(input) input.focus();
            }, 300);
        }
    }
}

function toggleLogin() {
    const login = document.getElementById('login-overlay');
    if (login) {
        login.classList.toggle('active');
    }
}
