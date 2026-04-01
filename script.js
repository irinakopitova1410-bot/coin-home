function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}
function toggleSearch() {
    document.getElementById('search-overlay').classList.toggle('active');
}
function closeAppPopup() {
    document.getElementById('app-popup').classList.remove('active');
}
window.onload = () => {
    setTimeout(() => {
        document.getElementById('app-popup').classList.add('active');
    }, 2000);
};
