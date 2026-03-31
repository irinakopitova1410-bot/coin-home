const prodotti = [
    {
        nome: "Candela Linen",
        prezzo: 27.55,
        prezzoOriginale: 29.00,
        status: "OFFERTA -5%",
        immagine: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200", // Sostituisci con le tue foto
        categoria: "Standard"
    },
    {
        nome: "Poltrona Bouclé",
        prezzo: 450.00,
        prezzoOriginale: 520.00,
        status: "BEST SELLER",
        immagine: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200",
        categoria: "Standard"
    }
];

function renderingProdotti(lista) {
    const griglia = document.getElementById('griglia-prodotti');
    if (!griglia) return;
    
    griglia.innerHTML = '';

    lista.forEach(p => {
        const item = document.createElement('div');
        item.className = 'zara-item';
        item.innerHTML = `
            <img src="${p.immagine}" alt="${p.nome}">
            <div class="zara-details">
                <span class="zara-status">${p.status}</span>
                <h2 class="zara-name">${p.nome}</h2>
                <div class="zara-price">${p.prezzo.toFixed(2)}€ <small style="text-decoration:line-through; opacity:0.5">${p.prezzoOriginale.toFixed(2)}€</small></div>
                <button class="btn-zara" onclick="alert('Aggiunto al carrello')">PRENOTA ORA</button>
            </div>
        `;
        griglia.appendChild(item);
    });
}

// Caricamento iniziale
window.onload = () => {
    renderingProdotti(prodotti);
    // Timer per il popup (5 secondi)
    setTimeout(() => {
        const popup = document.getElementById('newsletter-popup');
        if(popup) popup.style.display = 'block';
    }, 5000);
};

// Funzioni Menu
function openNav() { document.getElementById("full-menu").style.width = "100%"; }
function closeNav() { document.getElementById("full-menu").style.width = "0"; }
function closePopup() { document.getElementById('newsletter-popup').style.display = 'none'; }
