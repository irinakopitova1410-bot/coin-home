const catalogo = [
    { id: 1, nome: "VASO IN CERAMICA RUSTICA", scorta: 1, prezzo: 59, standardDesc: 10, vip: true, vipDesc: 60, img: "https://images.unsplash.com/photo-1578500484692-911075677b5d?q=80&w=1000" },
    { id: 2, nome: "POLTRONA IN TESSUTO BOUCLÉ", scorta: 1, prezzo: 450, standardDesc: 15, vip: true, vipDesc: 70, img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000" },
    { id: 3, nome: "CANDELA VEGETALE PURE", scorta: 5, prezzo: 29, standardDesc: 5, vip: false, vipDesc: 40, img: "https://images.unsplash.com/photo-1602872030219-cbf647a41456?q=80&w=1000" }
];

let view = "Standard";
const WHATSAPP_NUM = "393282121307"; // <--- METTI IL TUO NUMERO QUI

function renderApp() {
    const container = document.getElementById('griglia-prodotti');
    container.innerHTML = "";
    document.getElementById('tipo-view').innerText = view === "VIP" ? "OFFERTE RISERVATE %" : "NUOVI ARRIVI";

    catalogo.forEach(p => {
        if (p.vip && view !== "VIP") return;
        let sconto = view === "VIP" ? p.vipDesc : p.standardDesc;
        let prezzoF = p.prezzo - (p.prezzo * sconto / 100);

        const card = document.createElement('div');
        card.className = 'zara-card';
        card.innerHTML = `
            <img src="${p.img}">
            <div class="zara-info">
                <span class="zara-tag">SPECIAL PRICE -${sconto}%</span>
                <h3 class="zara-nome">${p.nome}</h3>
                <div class="zara-prezzi">
                    <span class="old-p">${p.prezzo.toFixed(2)}€</span>
                    <span>${prezzoF.toFixed(2)}€</span>
                </div>
                <p class="zara-scorta">${p.scorta < 2 ? 'ULTIMO DISPONIBILE' : 'RIMANENZA: ' + p.scorta}</p>
                <button class="btn-buy" onclick="order('${p.nome}', ${prezzoF.toFixed(2)})">PRENOTA</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function cambiaUser(tipo) { view = tipo; renderApp(); window.scrollTo(0,0); }
function order(n, p) { window.open(`https://wa.me/${WHATSAPP_NUM}?text=Salve, vorrei prenotare ${n} a ${p}€`, '_blank'); }

window.onload = renderApp;
