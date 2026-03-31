const catalogo = [
    { 
        id: 1, 
        nome: "Vaso in gres rigato", 
        scorta: 1, 
        prezzoOriginale: 39.99, 
        scontoStandard: 15,
        vip: true, 
        scontoVip: 50,
        img: "https://images.unsplash.com/photo-1578500484692-911075677b5d?q=80&w=600"
    },
    { 
        id: 2, 
        nome: "Lampada in lino e legno", 
        scorta: 3, 
        prezzoOriginale: 89.99, 
        scontoStandard: 10,
        vip: true,
        scontoVip: 40,
        img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=600"
    },
    { 
        id: 3, 
        nome: "Cuscino ricamato foglie", 
        scorta: 5, 
        prezzoOriginale: 29.99, 
        scontoStandard: 20,
        vip: false,
        img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600"
    }
];

let tipoUtente = "Standard";
const MIO_WHATSAPP = "391234567890"; // Inserisci il tuo numero!

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
                <span class="tag-sconto">-${sconto}%</span>
                <h3 class="nome-prod">${item.nome}</h3>
                <span class="prezzo-vecchio">${item.prezzoOriginale}€</span>
                <span class="prezzo-nuovo">${finale.toFixed(2)}€</span>
                <p class="rimanenza">Rimasti: ${item.scorta}</p>
                <button class="btn-ordina" onclick="mandaWhatsApp('${item.nome}', ${finale.toFixed(2)})">Aggiungi</button>
            </div>
        `;
        griglia.appendChild(div);
    });
}

function cambiaUser(livello) {
    tipoUtente = livello;
    document.getElementById('user-badge').innerText = livello === "VIP" ? "Area VIP" : "Collezione";
    document.getElementById('user-badge').className = livello === "VIP" ? "badge-vip" : "";
    caricaApp();
}

function mandaWhatsApp(p, pr) {
    window.open(`https://wa.me/${MIO_WHATSAPP}?text=Vorrei ordinare: ${p} (${pr}€)`, '_blank');
}

window.onload = caricaApp;
