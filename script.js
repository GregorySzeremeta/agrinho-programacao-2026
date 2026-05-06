// LOADING SCREEN
window.addEventListener("load", function(){
    setTimeout(()=>{
        document.getElementById("loading").style.opacity="0";
        document.getElementById("loading").style.visibility="hidden";
    },2000);
});

// CONTADORES ANIMADOS
const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{
    counter.innerText='0';
    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 100;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter,25);
        }else{
            counter.innerText = target;
        }
    }
    updateCounter();
});

// BOTÕES DAS REGIÕES
function mostrarRegiao(regiao){
    const info = document.getElementById("infoRegiao");

    if(regiao === "oeste"){
        info.innerHTML = `
        <h3>🌾 Oeste Paranaense</h3>
        <p>Maior polo de grãos, aves e suínos do Paraná. Região marcada por cooperativas fortes e tecnologia agrícola de ponta.</p>
        `;
    }

    if(regiao === "norte"){
        info.innerHTML = `
        <h3>☕ Norte Pioneiro</h3>
        <p>Conhecido pelo café especial, agricultura familiar e citricultura crescente. Um dos berços históricos da produção rural.</p>
        `;
    }

    if(regiao === "sudoeste"){
        info.innerHTML = `
        <h3>🥛 Sudoeste</h3>
        <p>Grande destaque na produção leiteira, milho e soja. Região de forte cooperativismo e sustentabilidade.</p>
        `;
    }

    if(regiao === "centro"){
        info.innerHTML = `
        <h3>🌲 Centro-Sul</h3>
        <p>Área de campos nativos, reflorestamento, pecuária e preservação ambiental. Importante equilíbrio entre agro e natureza.</p>
        `;
    }
}

// QUIZ AGRÍCOLA
const perguntas = [
{
    pergunta:"Qual prática ajuda a conservar o solo?",
    opcoes:["Queimada","Plantio Direto","Desmatamento"],
    correta:1
},
{
    pergunta:"Qual recurso pode gerar energia limpa na fazenda?",
    opcoes:["Petróleo","Carvão","Painel Solar"],
    correta:2
},
{
    pergunta:"O Paraná é destaque nacional em:",
    opcoes:["Produção de Frango","Produção de Ouro","Produção de Petróleo"],
    correta:0
}
];

let atual = 0;
let pontos = 0;

function carregarQuiz(){
    const q = document.getElementById("quiz");
    if(atual < perguntas.length){
        q.innerHTML = `
            <h3>${perguntas[atual].pergunta}</h3>
            ${perguntas[atual].opcoes.map((opcao,index)=>
                `<button onclick="responder(${index})">${opcao}</button>`
            ).join('')}
        `;
    }else{
        q.innerHTML = `
            <h2>🎉 Quiz Finalizado!</h2>
            <p>Você acertou ${pontos} de ${perguntas.length} perguntas.</p>
        `;
    }
}

function responder(indice){
    if(indice === perguntas[atual].correta){
        pontos++;
    }
    atual++;
    carregarQuiz();
}

carregarQuiz();

// FORMULÁRIO
document.getElementById("formContato").addEventListener("submit", function(e){
    e.preventDefault();
    alert("✅ Mensagem enviada com sucesso! Obrigado pelo contato.");
    this.reset();
});

// SCROLL SUAVE DESTACANDO MENU
const links = document.querySelectorAll('.navbar a');

links.forEach(link=>{
    link.addEventListener('click', function(){
        links.forEach(l=>l.style.color="white");
        this.style.color="#9ccc65";
    });
});