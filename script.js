/* --- RESET E FONTS BASE --- */
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;1,400&family=Montserrat:wght@200;300;400&family=Tenor+Sans&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }
body { 
    font-family: 'Montserrat', sans-serif; 
    background: #fff; 
    color: #1a1a1a;
    line-height: 1.6;
    overflow-x: hidden;
}

/* --- HEADER ATELIER (VERSIONE GIGANTE) --- */
header {
    height: 140px !important; 
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 0 50px !important;
    background: rgba(255, 255, 255, 0.98);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2000;
    border-bottom: 1px solid #f2f2f2;
}

.nav-left, .nav-right {
    flex: 1;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
}

.nav-right {
    display: flex;
    justify-content: flex-end;
    gap: 25px;
}

/* LOGO CENTRALE */
.atelier-style {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    transform: scale(1.6) !important; 
}

.atelier-style .brand-name {
    font-family: 'Bodoni Moda', serif !important;
    font-size: 26px !important;
    letter-spacing: 12px !important;
    font-weight: 500;
    color: #000;
    text-transform: uppercase;
}

.atelier-style .line {
    width: 110px !important;
    height: 1.5px !important;
    background: #000;
    margin: 12px 0 !important;
}

.atelier-style .brand-atelier {
    font-size: 13px !important;
    letter-spacing: 6px !important;
    color: #888;
}

/* --- PANNELLI LATERALI (MENU E FILTRI) --- */
/* Base comune per i menu a scomparsa */
.side-nav, .side-drawer-right {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 380px;
    background: #ffffff !important;
    z-index: 10000; /* Sopra a tutto */
    padding: 100px 50px;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    box-shadow: 0 0 50px rgba(0,0,0,0.1);
}

/* Menu Sinistra (Home) */
.side-nav { left: -100%; }
.side-nav.active { left: 0 !important; }

/* Menu Destra (Filtri) */
.side-drawer-right { right: -100%; }
.side-drawer-right.active { right: 0 !important; }

.drawer-content h4 {
    font-size: 11px;
    letter-spacing: 3px;
    margin-bottom: 40px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}

.drawer-content ul { list-style: none; }
.drawer-content ul li {
    font-size: 11px;
    letter-spacing: 2px;
    margin-bottom: 30px;
    cursor: pointer;
    text-transform: uppercase;
    color: #000 !important;
}

.close-btn {
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: 24px;
    cursor: pointer;
}

/* --- GRIGLIA PRODOTTI (ZARA STYLE) --- */
.arrivals-wrapper { padding-top: 160px; }

.zara-controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 50px;
    gap: 30px;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 50px;
}

.grid-wide { grid-template-columns: repeat(4, 1fr) !important; }

.product-item {
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.img-container {
    background: #f7f7f7;
    aspect-ratio: 3/4;
    overflow: hidden;
}

.img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.8s;
}

.product-item:hover img { transform: scale(1.05); }

/* --- RICERCA MODERNA --- */
.search-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    z-index: 5000;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: 0.4s;
}

.search-overlay.active { opacity: 1; visibility: visible; }

#ultra-search-input {
    width: 80%;
    border: none;
    background: transparent;
    font-size: 40px;
