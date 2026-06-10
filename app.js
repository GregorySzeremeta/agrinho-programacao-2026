const produtos = [
  {
    id: 1,
    nome: "Tomate orgânico",
    preco: 7.50,
    img: "https://images.unsplash.com/photo-1546470427-2275e0e2d0c3"
  },
  {
    id: 2,
    nome: "Alface fresca",
    preco: 4.00,
    img: "https://images.unsplash.com/photo-1566842600175-97dca4898445"
  },
  {
    id: 3,
    nome: "Milho verde",
    preco: 10.00,
    img: "https://images.unsplash.com/photo-1601315488950-3b5047998b2d"
  },
  {
    id: 4,
    nome: "Mel puro artesanal",
    preco: 18.00,
    img: "https://images.unsplash.com/photo-1587049352851-8d4e89133924"
  },
  {
    id: 5,
    nome: "Queijo colonial",
    preco: 25.00,
    img: "https://images.unsplash.com/photo-1452195100486-9cc805987862"
  },
  {
    id: 6,
    nome: "Café especial do campo",
    preco: 22.00,
    img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31"
  },
  {
    id: 7,
    nome: "Banana prata",
    preco: 6.00,
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e"
  },
  {
    id: 8,
    nome: "Feijão orgânico",
    preco: 12.00,
    img: "https://images.unsplash.com/photo-1603048297172-c92544798d5a"
  },
  {
    id: 9,
    nome: "Abóbora fresca",
    preco: 9.00,
    img: "https://images.unsplash.com/photo-1604909052743-94e8388f8b7f"
  }
];

// ---------------- LOJA ----------------
function renderProdutos() {
  const box = document.getElementById("produtos");
  if (!box) return;

  box.innerHTML = "";

  produtos.forEach(p => {
    box.innerHTML += `
      <div class="card">
        <img src="${p.img}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p class="price">R$ ${p.preco.toFixed(2)}</p>
        <button onclick="addCarrinho(${p.id})">Adicionar</button>
      </div>
    `;
  });

  updateQtd();
}

// resto igual (não mexe)const produtos =

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