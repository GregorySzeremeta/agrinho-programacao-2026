const produtos = [
  { nome: "Maçã orgânica", preco: 6.50, categoria: "frutas" },
  { nome: "Banana prata", preco: 4.00, categoria: "frutas" },
  { nome: "Alface verde", preco: 3.50, categoria: "verduras" },
  { nome: "Tomate fresco", preco: 7.00, categoria: "verduras" },
  { nome: "Milho natural", preco: 10.00, categoria: "graos" },
  { nome: "Feijão carioca", preco: 12.00, categoria: "graos" },
  { nome: "Mel puro", preco: 18.00, categoria: "organicos" },
  { nome: "Queijo colonial", preco: 25.00, categoria: "organicos" }
];

let carrinho = [];

function render(prod = produtos) {
  const box = document.getElementById("products");
  box.innerHTML = "";

  prod.forEach((p, i) => {
    box.innerHTML += `
      <div class="card">
        <h3>${p.nome}</h3>
        <p>Categoria: ${p.categoria}</p>
        <strong>R$ ${p.preco.toFixed(2)}</strong>
        <button onclick="add(${i})">Adicionar</button>
      </div>
    `;
  });
}

function add(i) {
  carrinho.push(produtos[i]);
  updateCart();
}

function updateCart() {
  const box = document.getElementById("cart-items");
  const total = document.getElementById("total");
  const count = document.getElementById("cart-count");

  box.innerHTML = "";
  let sum = 0;

  carrinho.forEach(item => {
    box.innerHTML += `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`;
    sum += item.preco;
  });

  total.innerText = `Total: R$ ${sum.toFixed(2)}`;
  count.innerText = carrinho.length;
}

function filtrarCategoria(cat) {
  if (cat === "todos") return render();
  render(produtos.filter(p => p.categoria === cat));
}

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  render(produtos.filter(p => p.nome.toLowerCase().includes(value)));
});

function finalizar() {
  if (carrinho.length === 0) return alert("Carrinho vazio!");
  alert("Compra finalizada com sucesso 🌱");
  carrinho = [];
  updateCart();
}

render();
updateCart();