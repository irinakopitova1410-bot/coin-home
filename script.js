function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('active');
}

function toggleSearch() {
    const search = document.getElementById('search-overlay');
    search.classList.toggle('active');
}

function closeAppPopup() {
    document.getElementById('app-popup').classList.remove('active');
}

window.onload = () => {
    setTimeout(() => {
        const popup = document.getElementById('app-popup');
        if(popup) popup.classList.add('active');
    }, 2000);
};
