const catalogo = [
    { 
        id: 1, 
        nome: "Vaso in gres effetto pietra", 
        scorta: 1, 
        prezzoOriginale: 59.99, 
        scontoStandard: 15,
        vip: true, 
        scontoVip: 60,
        img: "https://images.unsplash.com/photo-1578500484692-911075677b5d?q=80&w=1000"
    },
    { 
        id: 2, 
        nome: "Poltrona in tessuto bouclé", 
        scorta: 1, 
        prezzoOriginale: 450.00, 
        scontoStandard: 20,
        vip: true, 
        scontoVip: 75,
        img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000"
    },
    { 
        id: 3, 
        nome: "Candela vegetale 'Soft Cashmere'", 
        scorta: 8, 
        prezzoOriginale: 22.99, 
        scontoStandard: 5,
        vip: false,
        img: "https://images.unsplash.com/photo-1602872030219-cbf647a41456?q=80&w=1000"
    }
];

let tipoUtente = "Standard";
const MIO_WHATSAPP = "393282121307"; // Sostituisci con il tuo vero numero!

function caricaApp() {
    const griglia = document.getElementById('griglia-prodotti');
    griglia.innerHTML = "";

    catalogo.forEach(item => {
        if (item.vip && tipoUtente !== "VIP") return;

        let sconto = tipoUtente === "VIP" ? item.scontoVip : item.scontoStandard;
        let finale = item.prezzoOriginale - (item.prezzoOriginale * sconto / 100);

        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <div class="container-img">
                <img src="${item.img}" class="img-prodotto">
            </div>
            <div class="info-prodotto">
                <span class="tag-sconto">SPECIAL PRICE -${sconto}%</span>
                <h3 class="nome-prod">${item.nome}</h3>
                <span class="prezzo-vecchio">${item.prezzoOriginale.toFixed(2)}€</span>
                <span class="prezzo-nuovo">${finale.toFixed(2)}€</span>
                ${item.scorta < 3 ? `<p class="rimanenza">ULTIMO PEZZO DISPONIBILE</p>` : `<p class="rimanenza" style="color:black">Disponibile: ${item.scorta}</p>`}
                <button class="btn-ordina" onclick="mandaWhatsApp('${item.nome}', ${finale.toFixed(2)})">Acquista</button>
            </div>
        `;
        griglia.appendChild(div);
    });
}

function cambiaUser(livello) {
    tipoUtente = livello;
    document.getElementById('user-badge').innerText = livello === "VIP" ? "Area Privata VIP" : "Home Collection";
    caricaApp();
}

function mandaWhatsApp(p, pr) {
    const msg = `Salve Coin Home, vorrei prenotare ${p} al prezzo scontato di ${pr}€.`;
    window.open(`https://wa.me/${MIO_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
}

window.onload = caricaApp;
