let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ===== ELEMENTOS ===== */
const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const searchInput = document.getElementById("searchInput");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");
const darkModeBtn = document.getElementById("darkModeBtn");

/* ===== CARRINHO ABRIR/FECHAR ===== */
if(cartBtn){
cartBtn.addEventListener("click",()=>{
cartSidebar.classList.toggle("open");
});
}

/* ===== ADICIONAR AO CARRINHO ===== */
function addToCart(name, price){

cart.push({name, price});

saveCart();
renderCart();

}

/* ===== REMOVER ITEM ===== */
function removeItem(index){

cart.splice(index,1);

saveCart();
renderCart();

}

/* ===== SALVAR LOCALSTORAGE ===== */
function saveCart(){
localStorage.setItem("cart", JSON.stringify(cart));
}

/* ===== RENDER CARRINHO ===== */
function renderCart(){

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

const li = document.createElement("li");

li.innerHTML = `
<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
<span>${item.name} - R$ ${item.price.toFixed(2)}</span>
<button onclick="removeItem(${index})" style="background:red;color:white;border:none;padding:5px 8px;border-radius:6px;cursor:pointer;">
X
</button>
</div>
`;

cartItems.appendChild(li);

});

cartCount.textContent = cart.length;
cartTotal.textContent = "Total: R$ " + total.toFixed(2);

}

/* ===== BUSCA ===== */
if(searchInput){

searchInput.addEventListener("input",(e)=>{

const value = e.target.value.toLowerCase();

document.querySelectorAll(".product-card").forEach(card=>{

const name = card.querySelector("h3").innerText.toLowerCase();

card.style.display = name.includes(value) ? "block" : "none";

});

});

}

/* ===== MENU MOBILE ===== */
if(menuToggle){

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

/* ===== DARK MODE ===== */
if(darkModeBtn){

darkModeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

}

/* ===== CHECKOUT ===== */
document.querySelector(".checkout-btn").addEventListener("click",()=>{

if(cart.length === 0){
alert("Carrinho vazio!");
return;
}

let payment = document.getElementById("paymentMethod").value;

if(payment === "PIX"){
alert("Pagamento via PIX selecionado. Chave: agromarket@pix.com");
}

if(payment === "Cartão Crédito"){
alert("Pagamento com Cartão de Crédito selecionado.");
}

if(payment === "Cartão Débito"){
alert("Pagamento com Cartão de Débito selecionado.");
}

if(payment === "Dinheiro"){
alert("Pagamento em Dinheiro na entrega selecionado.");
}

alert("Compra finalizada com sucesso!");

cart = [];
saveCart();
renderCart();

cartSidebar.classList.remove("open");

});

/* ===== INICIALIZAR ===== */
renderCart();