const catalogo = [
    { id: 1, nome: "VASO CERAMICA", scorta: 2, prezzo: 45, vip: true, sconto: 50 },
    { id: 2, nome: "CANDELA PROFUMO", scorta: 15, prezzo: 18, vip: false },
    { id: 3, nome: "TAPPETO NORDIC", scorta: 1, prezzo: 280, vip: true, sconto: 65 },
    { id: 4, nome: "SPECCHIO MINIMAL", scorta: 3, prezzo: 95, vip: false },
    { id: 5, nome: "POLTRONA VIP", scorta: 1, prezzo: 450, vip: true, sconto: 70 }
];

let tipoUtente = "Standard";
const MIO_WHATSAPP = "3518588451"; // <--- CAMBIA CON IL TUO NUMERO

function caricaApp() {
    const griglia = document.getElementById('griglia-prodotti');
    griglia.innerHTML = "";
    catalogo.forEach(item => {
        if (item.vip && tipoUtente !== "VIP") return;
        let prezzoFinale = item.prezzo;
        let htmlSconto = "";
        if (item.vip && tipoUtente === "VIP") {
            prezzoFinale = item.prezzo - (item.prezzo * item.sconto / 100);
            htmlSconto = `<span class="tag-sconto">-${item.sconto}% VIP</span>`;
        }
        const div = document.createElement('div');
        div.className = `card ${item.vip ? 'card-vip' : ''}`;
        div.innerHTML = `${htmlSconto}<h3 class="nome-prod">${item.nome}</h3>
            <p class="prezzo-vecchio">${item.vip ? item.prezzo + '€' : ''}</p>
            <p class="prezzo-nuovo">${prezzoFinale.toFixed(2)}€</p>
            <p class="rimanenza">Rimasti: <strong>${item.scorta}</strong> pz</p>
            <button class="btn-ordina" onclick="mandaWhatsApp('${item.nome}', ${prezzoFinale})">ORDINA ORA</button>`;
        griglia.appendChild(div);
    });
}

function cambiaUser(livello) {
    tipoUtente = livello;
    document.getElementById('user-badge').className = livello === "VIP" ? "badge-vip" : "badge-standard";
    document.getElementById('user-badge').innerText = livello === "VIP" ? "CLIENTE VIP" : "CLIENTE STANDARD";
    document.getElementById('titolo-pagina').innerText = livello === "VIP" ? "RIMANENZE VIP %" : "Nuova Collezione";
    caricaApp();
}

function mandaWhatsApp(prodotto, prezzo) {
    const testo = `Ciao Coin Home! Vorrei prenotare ${prodotto} al prezzo VIP di ${prezzo}€.`;
    window.open(`https://wa.me/${MIO_WHATSAPP}?text=${encodeURIComponent(testo)}`, '_blank');
}
window.onload = caricaApp;