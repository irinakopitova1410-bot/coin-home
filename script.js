function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('active');
}

// Chiudi menu con tasto ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById('side-menu').classList.remove('active');
    }
});

// Funzione scroll morbido per i link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu(); // Chiude il menu dopo il click
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
