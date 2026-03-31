const catalogo = [
    { id: 1, nome: "VASO CERAMICA RUSTICA", prezzo: 59, scontoStandard: 10, vip: true, scontoVip: 60, img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=1200" },
    { id: 2, nome: "POLTRONA TESSUTO BOUCLÉ", prezzo: 450, scontoStandard: 15, vip: true, scontoVip: 70, img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200" },
    { id: 3, nome: "CANDELA VEGETALE PURE", prezzo: 29, scontoStandard: 5, vip: false, scontoVip: 40, img: "https://images.unsplash.com/photo-1602872030219-cbf647a41456?q=80&w=1200" }
];

let modalita = "Standard";
const WHATSAPP = "393282121307";

function render() {
    const main = document.getElementById('griglia-prodotti');
    main.innerHTML = "";
    
    catalogo.forEach(p => {
        if (p.vip && modalita !== "VIP") return;
        let sconto = modalita === "VIP" ? p.scontoVip : p.scontoStandard;
        let finale = p.prezzo - (p.prezzo * sconto / 100);

        main.innerHTML += `
            <div class="zara-item">
                <img src="${p.img}">
                <div class="zara-details">
                    <p style="color:#d00; font-size:0.6rem; margin-bottom:5px;">-${sconto}% SPECIAL PRICE</p>
                    <h2 class="zara-name">${p.nome}</h2>
                    <div class="zara-price">
                        <span class="old-price">${p.prezzo.toFixed(2)}€</span>
                        <span>${finale.toFixed(2)}€</span>
                    </div>
                    <p class="zara-status">ULTIME RIMANENZE</p>
                    <button class="btn-zara" onclick="order('${p.nome}', ${finale.toFixed(2)})">PRENOTA ORA</button>
                </div>
            </div>
        `;
    });
}

function cambiaUser(tipo) { modalita = tipo; render(); window.scrollTo(0,0); }
function order(n, p) { window.open(`https://wa.me/${WHATSAPP}?text=Vorrei prenotare ${n} a ${p}€`, '_blank'); }

window.onload = render;
