const prodotti = [
    { nome: "Candela Linen", status: "OFFERTA -5%", img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1600" },
    { nome: "Poltrona Bouclé", status: "NEW", img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1600" }
];

function render() {
    const container = document.getElementById('griglia-prodotti');
    if(!container) return;
    container.innerHTML = prodotti.map(p => `
        <div class="zara-item">
            <img src="${p.img}">
            <div class="zara-details">
                <span style="font-size:0.6rem; letter-spacing:2px">${p.status}</span>
                <h2 class="zara-name">${p.nome}</h2>
                <button class="btn-zara">PRENOTA ORA</button>
            </div>
        </div>
    `).join('');
}

function openNav() { document.getElementById("full-menu").style.width = "100%"; }
function closeNav() { document.getElementById("full-menu").style.width = "0"; }

window.onload = render;
