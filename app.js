const produtos = [
  { id: 1, nome: "Tomate orgânico", preco: 7.5 },
  { id: 2, nome: "Alface fresca", preco: 4.0 },
  { id: 3, nome: "Milho verde", preco: 10.0 },
  { id: 4, nome: "Mel puro", preco: 18.0 },
  { id: 5, nome: "Queijo artesanal", preco: 25.0 }
];

// ----------------------
// PEGAR CARRINHO
// ----------------------
function getCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function saveCarrinho(carrinho) {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// ----------------------
// LOJA
// ----------------------
function renderProdutos() {
  const box = document.getElementById("produtos");
  if (!box) return;

  box.innerHTML = "";

  produtos.forEach(p => {
    box.innerHTML += `
      <div class="card">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco.toFixed(2)}</p>
        <button onclick="addCarrinho(${p.id})">Adicionar</button>
      </div>
    `;
  });

  updateQtd();
}

function addCarrinho(id) {
  let carrinho = getCarrinho();
  const item = produtos.find(p => p.id === id);

  carrinho.push(item);
  saveCarrinho(carrinho);

  updateQtd();
  alert("Adicionado ao carrinho 🌿");
}

function updateQtd() {
  const qtd = document.getElementById("qtd");
  if (!qtd) return;

  qtd.textContent = getCarrinho().length;
}

// ----------------------
// CARRINHO
// ----------------------
function renderCarrinho() {
  const box = document.getElementById("carrinho");
  if (!box) return;

  let carrinho = getCarrinho();
  let total = 0;

  box.innerHTML = "";

  carrinho.forEach((p, i) => {
    total += p.preco;

    box.innerHTML += `
      <div class="item">
        ${p.nome} - R$ ${p.preco.toFixed(2)}
        <button onclick="remover(${i})">Remover</button>
      </div>
    `;
  });

  document.getElementById("total").innerText =
    "Total: R$ " + total.toFixed(2);
}

function remover(index) {
  let carrinho = getCarrinho();
  carrinho.splice(index, 1);
  saveCarrinho(carrinho);
  renderCarrinho();
}

function finalizar() {
  localStorage.removeItem("carrinho");
  alert("Compra finalizada 🌱 Obrigado por apoiar o campo!");
  window.location.reload();
}