
/* =========================
   ESTADO GLOBAL
========================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* =========================
   ELEMENTOS
========================= */

const cartBtn = document.getElementById("cartBtn");
const cartBox = document.getElementById("cart");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalEl = document.getElementById("total");
const searchInput = document.getElementById("searchInput");
const checkoutBtn = document.getElementById("checkout");
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("login");

/* =========================
   CARRINHO - ADICIONAR
========================= */

function add(name, price) {

cart.push({ name, price });

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
   ATUALIZAR CARRINHO UI
========================= */

function updateCart() {

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item, index) => {

total += item.price;

const li = document.createElement("li");

li.innerHTML = `
<span>${item.name}</span>
<strong>R$ ${item.price.toFixed(2)}</strong>
<button onclick="remove(${index})">x</button>
`;

cartItems.appendChild(li);

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
   ABRIR / FECHAR CARRINHO
========================= */

if (cartBtn) {
cartBtn.onclick = () => {
cartBox.classList.add("open");
};
}

if (closeCart) {
closeCart.onclick = () => {
cartBox.classList.remove("open");
};
}

/* =========================
   BUSCA DE PRODUTOS
========================= */

if (searchInput) {

searchInput.addEventListener("input", (e) => {

const value = e.target.value.toLowerCase();

document.querySelectorAll(".product").forEach((product) => {

const name = product.querySelector("h3").innerText.toLowerCase();

product.style.display = name.includes(value) ? "block" : "none";

});

});

}

/* =========================
   CHECKOUT SIMULADO
========================= */

if (checkoutBtn) {

checkoutBtn.onclick = () => {

if (cart.length === 0) {
alert("Carrinho vazio!");
return;
}

const payment = document.getElementById("payment")?.value || "PIX";

alert(`Compra finalizada!\nPagamento: ${payment}`);

cart = [];
saveCart();
updateCart();
cartBox.classList.remove("open");

};

}

/* =========================
   LOGIN MODAL
========================= */

if (loginBtn && loginModal) {

loginBtn.onclick = () => {
loginModal.style.display = "flex";
};

loginModal.onclick = (e) => {
if (e.target === loginModal) {
loginModal.style.display = "none";
}
};

}

/* =========================
   INICIALIZAÇÃO
========================= */

updateCart();