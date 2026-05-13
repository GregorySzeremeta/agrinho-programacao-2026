// Loading
window.addEventListener('load', () => {
  setTimeout(() => {
    const loading = document.getElementById('loading');
    loading.style.opacity = '0';
    loading.style.visibility = 'hidden';
  }, 1500);
});

// Counters
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.dataset.target;
  const increment = Math.max(1, target / 100);

  function update() {
    const current = +counter.innerText.replace(/\D/g, '') || 0;

    if (current < target) {
        counter.innerText = Math.ceil(current + increment).toLocaleString('pt-BR');
      requestAnimationFrame(update);
    } else {
      counter.innerText = target.toLocaleString('pt-BR');
    }
  }

  update();
});

// Regiões
function mostrarRegiao(regiao) {
  const info = document.getElementById('infoRegiao');

  const dados = {
    oeste: {
      titulo: '🌾 Oeste Paranaense',
      texto: 'Maior polo de grãos, aves e suínos do Paraná.'
    },
    norte: {
         titulo: '☕ Norte Pioneiro',
      texto: 'Referência em cafés especiais e agricultura familiar.'
    },
    sudoeste: {
      titulo: '🥛 Sudoeste',
      texto: 'Destaque na produção leiteira e cooperativismo.'
    },
    centro: {
      titulo: '🌲 Centro-Sul',
      texto: 'Equilíbrio entre pecuária, reflorestamento e preservação.'
    }
  };

  info.innerHTML = `
    <h3>${dados[regiao].titulo}</h3>
    <p>${dados[regiao].texto}</p>
    `;
}

// Quiz
const perguntas = [
  {
    pergunta: 'Qual prática ajuda a conservar o solo?',
    opcoes: ['Queimada', 'Plantio Direto', 'Desmatamento'],
    correta: 1
  },
  {
    pergunta: 'Qual fonte gera energia limpa?',
    opcoes: ['Carvão', 'Painel Solar', 'Diesel'],
    correta: 1
     },
  {
    pergunta: 'O Paraná é destaque nacional em:',
    opcoes: ['Frango', 'Petróleo', 'Minério'],
    correta: 0
  }
];

let atual = 0;
let pontos = 0;

function carregarQuiz() {
  const quiz = document.getElementById('quizContainer');

  if (atual >= perguntas.length) {
    quiz.innerHTML = `
      <h3>🎉 Quiz Finalizado!</h3>
      <p>Você acertou ${pontos} de ${perguntas.length} perguntas.</p>
    `;
     return;
  }

  const pergunta = perguntas[atual];

  quiz.innerHTML = `
    <h3>${pergunta.pergunta}</h3>
    ${pergunta.opcoes
      .map((opcao, i) => `<button onclick="responder(${i})">${opcao}</button>`)
      .join('')}
  `;
}

function responder(indice) {
  if (indice === perguntas[atual].correta) pontos++;
  atual++;
  carregarQuiz();
}
carregarQuiz();

// Formulário
const form = document.getElementById('formContato');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('✅ Mensagem enviada com sucesso!');
  form.reset();
});