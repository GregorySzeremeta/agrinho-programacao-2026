const cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

cartBtn.addEventListener("click", () => {
    cartSidebar.classList.toggle("open");
});

function addToCart(name, price){

cart.push({
name,
price
});

renderCart();
}

function renderCart(){

cartItems.innerHTML = "";

let total = 0;

cart.forEach(item=>{

total += item.price;

const li = document.createElement("li");

li.innerHTML = `
${item.name}
- R$ ${item.price.toFixed(2)}
`;

cartItems.appendChild(li);

});

cartCount.textContent = cart.length;

cartTotal.textContent =
`Total: R$ ${total.toFixed(2)}`;

}

const contrastBtn =
document.getElementById("contrastBtn");

contrastBtn.addEventListener("click",()=>{
document.body.classList.toggle("dark");
});

const menuToggle =
document.getElementById("menuToggle");

const nav =
document.getElementById("nav");

menuToggle.addEventListener("click",()=>{
nav.classList.toggle("active");
});