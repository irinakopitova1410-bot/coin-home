// CONFIGURAZIONE PRODOTTI
const catalogo = [
    { id: 1, nome: "Vaso gres lavorato", prezzo: 49, scontoStd: 10, vip: true, scontoVip: 60, img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=1200" },
    { id: 2, nome: "Poltrona Bouclé", prezzo: 450, scontoStd: 15, vip: true, scontoVip: 75, img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200" },
    { id: 3, nome: "Candela Linen", prezzo: 29, scontoStd: 5, vip: false, scontoVip: 40, img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200" }
];

let modalita = "Standard";
const WHATSAPP_NUM = "393282121307"; 

function openNav() { document.getElementById("full-menu").style.width = "100%"; }
function closeNav() { document.getElementById("full-menu").style.width = "0%"; }

function renderApp() {
    const main = document.getElementById('griglia-prodotti');
    main.innerHTML = "";
    
    catalogo.forEach(p => {
        if (p.vip && modalita !== "VIP") return;
        let sconto = modalita === "VIP" ? p.scontoVip : p.scontoStd;
        let finale = p.prezzo - (p.prezzo * sconto / 100);

        const card = document.createElement('div');
        card.className = 'zara-item';
        card.innerHTML = `
            <img src="${p.img}">
            <div class="zara-details">
                <span class="zara-status">${modalita === 'VIP' ? 'ESCLUSIVA VIP' : 'OFFERTA'} -${sconto}%</span>
                <h2 class="zara-name">${p.nome}</h2>
                <div class="zara-price">
                    <span class="old-price">${p.prezzo.toFixed(2)}€</span>
                    <span>${finale.toFixed(2)}€</span>
                </div>
                <button class="btn-zara" onclick="inviaOrdine('${p.nome}', ${finale.toFixed(2)})">PRENOTA ORA</button>
            </div>
        `;
        main.appendChild(card);
    });
function filtraProdotti() {
    const input = document.getElementById('main-search').value.toUpperCase();
    const items = document.querySelectorAll('.zara-item');

    items.forEach(item => {
        const nomeProdotto = item.querySelector('.zara-name').innerText.toUpperCase();
        if (nomeProdotto.indexOf(input) > -1) {
            item.style.display = "";
            item.classList.add('visible'); // Riattiva l'animazione
        } else {
            item.style.display = "none";
            item.classList.remove('visible');
        }
    });
}
    // --- MOTORE ANIMAZIONE (RIGA 43 CIRCA) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.zara-item').forEach(item => observer.observe(item));
}

function cambiaUser(tipo) {
    modalita = tipo;
    renderApp();
    window.scrollTo(0,0);
}

function inviaOrdine(nome, prezzo) {
    const msg = `Ciao Coin Home, vorrei ordinare ${nome} a ${prezzo}€`;
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`, '_blank');
}

window.onload = renderApp;
// Funzioni per gestire il Popup
function openPopup() {
    const popup = document.getElementById("newsletter-popup");
    if(popup) popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("newsletter-popup");
    if(popup) popup.style.display = "none";
}

// ATTIVAZIONE: Mostra il popup dopo 1 secondi
setTimeout(openPopup, 1000);

// Funzione per il tasto sottoscriviti
function subscribe() {
    alert("Grazie per l'iscrizione! Controlla la tua email per il codice VIP.");
    closePopup();
}
