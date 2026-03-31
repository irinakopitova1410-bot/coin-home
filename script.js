/* --- LOGICA DI VENDITA COIN HOME --- */

const catalogo = [
    { 
        id: 1, 
        nome: "Vaso in gres lavorato", 
        prezzo: 49, 
        scontoStandard: 15, 
        vip: true, 
        scontoVip: 60, 
        img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=1200" 
    },
    { 
        id: 2, 
        nome: "Poltrona in tessuto bouclé", 
        prezzo: 380, 
        scontoStandard: 20, 
        vip: true, 
        scontoVip: 75, 
        img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200" 
    },
    { 
        id: 3, 
        nome: "Candela vegetale 'Linen'", 
        prezzo: 25, 
        scontoStandard: 10, 
        vip: false, 
        scontoVip: 40, 
        img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200" 
    }
];

let modalita = "Standard";
const WHATSAPP_NUM = "393282121307"; // Sostituisci con il tuo numero reale

function renderApp() {
    const main = document.getElementById('griglia-prodotti');
    main.innerHTML = "";
    
    // Aggiorna il testo del badge nell'header se presente
    const badge = document.getElementById('tipo-view');
    if(badge) badge.innerText = modalita === "VIP" ? "OFFERTE RISERVATE %" : "NUOVI ARRIVI";

    catalogo.forEach(p => {
        // Logica Rimanenze: Se è un pezzo VIP, appare solo in modalità VIP
        if (p.vip && modalita !== "VIP") return;

        let sconto = modalita === "VIP" ? p.scontoVip : p.scontoStandard;
        let prezzoFinale = p.prezzo - (p.prezzo * sconto / 100);

        // Struttura a Scansione Verticale (Zara Home Style)
        const item = document.createElement('div');
        item.className = 'zara-item';
        item.innerHTML = `
            <img src="${p.img}" loading="lazy">
            <div class="zara-details">
                <span class="zara-status">SPECIAL PRICE -${sconto}%</span>
                <h2 class="zara-name">${p.nome}</h2>
                <div class="zara-price">
                    <span class="old-price">${p.prezzo.toFixed(2)}€</span>
                    <span>${prezzoFinale.toFixed(2)}€</span>
                </div>
                <button class="btn-zara" onclick="inviaOrdine('${p.nome}', ${prezzoFinale.toFixed(2)})">PRENOTA ORA</button>
            </div>
        `;
        main.appendChild(item);
    });
}

function cambiaUser(tipo) {
    modalita = tipo;
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function inviaOrdine(nome, prezzo) {
    const messaggio = `Buongiorno, vorrei ordinare dal catalogo: ${nome} al prezzo scontato di ${prezzo}€.`;
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(messaggio)}`, '_blank');
}

// Avvio dell'app al caricamento
window.onload = renderApp;
