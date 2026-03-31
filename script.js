const catalogo = [
    { 
        id: 1, 
        nome: "VASO IN CERAMICA RUSTICA", 
        scorta: 2, 
        prezzoOriginale: 60, 
        scontoStandard: 20, // -20% per tutti
        vip: true, 
        scontoVip: 60,      // -60% solo per VIP
        img: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 2, 
        nome: "CANDELA AROMATICA LINEN", 
        scorta: 12, 
        prezzoOriginale: 30, 
        scontoStandard: 10,
        vip: false,
        img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 3, 
        nome: "TAPPETO JUTA NATURALE", 
        scorta: 1, 
        prezzoOriginale: 250, 
        scontoStandard: 30,
        vip: true, 
        scontoVip: 70, 
        img: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=600&q=80"
    }
];

let tipoUtente = "Standard";
const MIO_WHATSAPP = "391234567890"; // Metti il tuo numero reale qui!

function caricaApp() {
    const griglia = document.getElementById('griglia-prodotti');
    griglia.innerHTML = "";

    catalogo.forEach(item => {
        // Se è un pezzo solo VIP e l'utente è Standard, lo nascondiamo (o lo mostriamo oscurato)
        if (item.vip && tipoUtente !== "VIP") return;

        let scontoApplicato = tipoUtente === "VIP" ? item.scontoVip : item.scontoStandard;
        let prezzoFinale = item.prezzoOriginale - (item.prezzoOriginale * scontoApplicato / 100);

        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <div class="container-img">
                <img src="${item.img}" class="img-prodotto">
                <span class="tag-sconto">-${scontoApplicato}%</span>
            </div>
            <h3 class="nome-prod">${item.nome}</h3>
            <p class="prezzo-vecchio">${item.prezzoOriginale}€</p>
            <p class="prezzo-nuovo">${prezzoFinale.toFixed(2)}€</p>
            <p class="rimanenza">ULTIMI ${item.scorta} PEZZI DISPONIBILI</p>
            <button class="btn-ordina" onclick="mandaWhatsApp('${item.nome}', ${prezzoFinale.toFixed(2)})">PRENOTA ORA</button>
        `;
        griglia.appendChild(div);
    });
}

function cambiaUser(livello) {
    tipoUtente = livello;
    document.getElementById('user-badge').className = livello === "VIP" ? "badge-vip" : "badge-standard";
    document.getElementById('user-badge').innerText = livello === "VIP" ? "ACCESSO VIP ATTIVO" : "CLIENTE STANDARD";
    caricaApp();
}

function mandaWhatsApp(prodotto, prezzo) {
    const testo = `Ciao Coin Home! Vorrei prenotare ${prodotto} in offerta a ${prezzo}€.`;
    window.open(`https://wa.me/${MIO_WHATSAPP}?text=${encodeURIComponent(testo)}`, '_blank');
}

window.onload = caricaApp;
