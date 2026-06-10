/* =========================
   PRODUTOS BASE
========================= */

const products = [
{ name:"Maçã Orgânica", price:12.90 },
{ name:"Banana Prata", price:8.90 },
{ name:"Laranja", price:7.50 },
{ name:"Morango", price:16.90 },
{ name:"Abacaxi", price:10.90 },
{ name:"Tomate", price:9.90 },
{ name:"Alface", price:4.50 },
{ name:"Cenoura", price:5.90 },
{ name:"Batata Doce", price:6.90 },
{ name:"Pepino", price:4.90 },
{ name:"Queijo Colonial", price:29.90 },
{ name:"Leite Integral", price:7.90 },
{ name:"Iogurte", price:8.90 },
{ name:"Mel Puro", price:24.90 },
{ name:"Própolis", price:19.90 },
{ name:"Ovos Caipira", price:18.90 },
{ name:"Feijão", price:11.90 },
{ name:"Milho Verde", price:9.90 },
{ name:"Arroz", price:21.90 },
{ name:"Café Artesanal", price:34.90 }
];

/* =========================
   ESTADO DO CARRINHO
========================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* =========================
   ELEMENTOS
========================= */

const grid = document.getElementById("grid");
const cartBox = document.getElementById("cart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalEl = document.getElementById("total");

/* =========================
   RENDER PRODUTOS
========================= */

function renderProducts() {

grid.innerHTML = "";

products.forEach((p, i) => {

grid.innerHTML += `
<div class="product">
<h3>${p.name}</h3>
<p>R$ ${p.price.toFixed(2)}</p>
<button onclick="add(${i})">Adicionar</button>
</div>
`;

});

}

renderProducts();

/* =========================
   ADICIONAR AO CARRINHO
========================= */

function add(index) {

cart.push(products[index]);

saveCart();
updateCart();

}

/* =========================
   REMOVER ITEM
========================= */

function remove(index) {

cart.splice(index, 1);

saveCart();
updateCart();

}

/* =========================
   ATUALIZAR CARRINHO
========================= */

function updateCart() {

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item, i) => {

total += item.price;

cartItems.innerHTML += `
<li>
${item.name} - R$ ${item.price.toFixed(2)}
<button onclick="remove(${i})">❌</button>
</li>
`;

});

cartCount.innerText = cart.length;
totalEl.innerText = "Total: R$ " + total.toFixed(2);

}

/* =========================
   SALVAR LOCALSTORAGE
========================= */

function saveCart() {
localStorage.setItem("cart", JSON.stringify(cart));
}

/* =========================
   ABRIR CARRINHO
========================= */

document.getElementById("cartBtn").onclick = () => {
cartBox.classList.toggle("open");
};

/* =========================
   DARK MODE
========================= */

document.getElementById("themeBtn").onclick = () => {
document.body.classList.toggle("dark");
};

/* =========================
   LOGIN MODAL
========================= */

const login = document.getElementById("login");

document.getElementById("loginBtn").onclick = () => {
login.style.display = "flex";
};

login.onclick = (e) => {
if (e.target === login) {
login.style.display = "none";
}
};

/* =========================
   BUSCA DE PRODUTOS
========================= */

document.getElementById("searchInput").addEventListener("input", (e) => {

const value = e.target.value.toLowerCase();

const filtered = products.filter(p =>
p.name.toLowerCase().includes(value)
);

grid.innerHTML = "";

filtered.forEach((p, i) => {

grid.innerHTML += `
<div class="product">
<h3>${p.name}</h3>
<p>R$ ${p.price.toFixed(2)}</p>
<button onclick="add(${products.indexOf(p)})">Adicionar</button>
</div>
`;

});

});

/* =========================
   CUPOM DE DESCONTO
========================= */

document.getElementById("cupom").addEventListener("input", (e) => {

const cupom = e.target.value.toUpperCase();

if (cupom === "AGRO10") {

let total = cart.reduce((a,b)=>a+b.price,0);
total = total * 0.9;

totalEl.innerText = "Total com desconto: R$ " + total.toFixed(2);

}

});

/* =========================
   FRETE (SIMULAÇÃO CEP)
========================= */

document.getElementById("cep").addEventListener("blur", async (e) => {

const cep = e.target.value;

if (cep.length === 8) {

const frete = Math.floor(Math.random() * 20) + 10;

totalEl.innerText += " | Frete: R$ " + frete;

}

});

/* =========================
   CHECKOUT FINAL
========================= */

document.getElementById("checkout").onclick = () => {

if (cart.length === 0) {
alert("Carrinho vazio!");
return;
}

alert("Compra finalizada com sucesso! (simulação)");

cart = [];
saveCart();
updateCart();

cartBox.classList.remove("open");

};

/* =========================
   INICIALIZAÇÃO
========================= */

updateCart();