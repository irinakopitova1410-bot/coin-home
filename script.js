// CONFIGURAZIONE PRODOTTI
const catalogo = [
    { id: 1, nome: "Vaso gres lavorato", prezzo: 49, scontoStd: 10, vip: true, scontoVip: 60, img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=1200" },
    { id: 2, nome: "Poltrona Bouclé", prezzo: 450, scontoStd: 15, vip: true, scontoVip: 75, img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200" },
    { id: 3, nome: "Candela Linen", prezzo: 29, scontoStd: 5, vip: false, scontoVip: 40, img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200" }
];

let modalita = "Standard";
const WHATSAPP_NUM = "393282121307"; 

// FUNZIONE PER APRIRE/CHIUDERE MENU
function openNav() { document.getElementById("full-menu").style.width = "100%"; }
function closeNav() { document.getElementById("full-menu").style.width = "0%"; }

// FUNZIONE PER CARICARE I PRODOTTI
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
                <span class="zara-status">OFFERTA -${sconto}%</span>
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
}
// Attiva l'animazione di comparsa
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.zara-item').forEach(item => {
        observer.observe(item);
    });
// FUNZIONE PER CAMBIARE MODALITÀ (VIP/STANDARD)
function cambiaUser(tipo) {
    modalita = tipo;
    renderApp();
    window.scrollTo(0,0);
}

// FUNZIONE WHATSAPP
function inviaOrdine(nome, prezzo) {
    const msg = `Ciao Coin Home, vorrei ordinare ${nome} a ${prezzo}€`;
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`, '_blank');
}

window.onload = renderApp;
