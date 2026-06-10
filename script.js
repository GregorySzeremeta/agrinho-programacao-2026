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
{ name:"Pepino", price:4.90 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const grid = document.getElementById("grid");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalEl = document.getElementById("total");

/* =========================
   RENDER (OTIMIZADO)
========================= */

function renderProducts(list = products) {

const html = list.map((p, i) => `
<div class="product">
<h3>${p.name}</h3>
<p>R$ ${p.price.toFixed(2)}</p>
<button onclick="add(${i})">Adicionar</button>
</div>
`).join("");

grid.innerHTML = html;
}

/* =========================
   CARRINHO
========================= */

function add(i){
cart.push(products[i]);
save();
updateCart();
}

function remove(i){
cart.splice(i,1);
save();
updateCart();
}

function updateCart(){

let total = 0;

cartItems.innerHTML = cart.map((item,i)=>{
total += item.price;

return `
<li>
${item.name} - R$ ${item.price.toFixed(2)}
<button onclick="remove(${i})">x</button>
</li>
`;

}).join("");

cartCount.textContent = cart.length;
totalEl.textContent = "Total: R$ " + total.toFixed(2);
}

function save(){
localStorage.setItem("cart", JSON.stringify(cart));
}

/* =========================
   BUSCA (SEM TRAVAR)
========================= */

document.getElementById("searchInput")
.addEventListener("input",(e)=>{

const v = e.target.value.toLowerCase();

const filtered = products.filter(p =>
p.name.toLowerCase().includes(v)
);

renderProducts(filtered);

});

/* =========================
   CARRINHO TOGGLE
========================= */

document.getElementById("cartBtn")
.onclick = () => {
document.getElementById("cart").classList.toggle("open");
};

/* =========================
   DARK MODE
========================= */

document.getElementById("themeBtn")
.onclick = () => {
document.body.classList.toggle("dark");
};

/* =========================
   INIT
========================= */

renderProducts();
updateCart();