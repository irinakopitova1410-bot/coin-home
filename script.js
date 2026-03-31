const catalogo = [
    { id: 1, nome: "Scultura in Ceramica Grezza", scorta: 1, prezzo: 59, standardDesc: 10, vip: true, vipDesc: 60, img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=1200" },
    { id: 2, nome: "Poltrona in Tessuto Bouclé Chic", scorta: 1, prezzo: 450, standardDesc: 15, vip: true, vipDesc: 75, img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200" },
    { id: 3, nome: "Candela Botanica Pure Linen", scorta: 5, prezzo: 29, standardDesc: 5, vip: false, vipDesc: 40, img: "https://images.unsplash.com/photo-1602872030219-cbf647a41456?q=80&w=1200" }
];

let mode = "Standard";
const WHATSAPP = "+ 39 3518588451 ; // <--- IL TUO NUMERO QUI

function buildApp() {
    const main = document.getElementById('griglia-prodotti');
    main.innerHTML = "";
    document.getElementById('user-badge').innerText = mode === "VIP" ? "OFFERTE RISERVATE %" : "NUOVA COLLEZIONE";

    catalogo.forEach(p => {
        if (p.vip && mode !== "VIP") return;
        let sconto = mode === "VIP" ? p.vipDesc : p.standardDesc;
        let prezzoF = p.prezzo - (p.prezzo * sconto / 100);

        const card = document.createElement('div');
        card.className = 'card-vip';
        card.innerHTML = `
            <img src="${p.img}" class="img-cinematic">
            <div class="info-vip">
                <span class="tag-exclusive">SPECIAL PRICE -${sconto}%</span>
                <h3 class="nome-prod-luxury">${p.nome}</h3>
                <div class="prezzi-vip">
                    <span class="old-p-vip">${p.prezzo.toFixed(2)}€</span>
                    <span>${prezzoF.toFixed(2)}€</span>
                </div>
                ${p.scorta < 3 ? `<p class="rimanenza-urgenza">ULTIMO PEZZO DISPONIBILE</p>` : `<p class="rimanenza-urgenza" style="color:black">Disponibile: ${p.scorta}</p>`}
                <button class="btn-reserve-vip" onclick="order('${p.nome}', ${prezzoF.toFixed(2)})">Prenota</button>
            </div>
        `;
        main.appendChild(card);
    });
}

function cambiaUser(tipo) { mode = tipo; buildApp(); window.scrollTo(0,0); }
function order(n, p) { window.open(`https://wa.me/${WHATSAPP}?text=Richiesta ordine: ${n} (${p}€)`, '_blank'); }

window.onload = buildApp;
