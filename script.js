window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.opacity = "0";
        document.getElementById("loading-screen").style.visibility = "hidden";
    }, 1800);
});

/* CONTADOR ANIMADO */
const counters = document.querySelectorAll('.counter');

const iniciarContador = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = target / 200;

            if(count < target){
                counter.innerText = Math.ceil(count + speed).toLocaleString('pt-BR');
                setTimeout(updateCount, 20);
            }else{
                counter.innerText = target.toLocaleString('pt-BR');
            }
        }
        updateCount();
    });
}

let contadorExecutado = false;
window.addEventListener('scroll', () => {
    const section = document.querySelector('.counter-section');
    const pos = section.getBoundingClientRect().top;

    if(pos < window.innerHeight && !contadorExecutado){
        iniciarContador();
        contadorExecutado = true;
    }
});

/* MAPA INTERATIVO PARANÁ */
function mostrarRegiao(regiao){
    const info = document.getElementById("info-regiao");

    if(regiao === "oeste"){
        info.innerHTML = `
            <h3>🌾 Região Oeste</h3>
            <p>Maior produtora de soja, milho, frango e suínos. Região de cooperativas gigantes e alta tecnologia agrícola.</p>
        `;
    }

    if(regiao === "norte"){
        info.innerHTML = `
            <h3>☕ Norte Pioneiro</h3>
            <p>Tradicional no café, frutas e agricultura familiar. Destaque para cafés especiais e citricultura.</p>
        `;
    }

    if(regiao === "centro"){
        info.innerHTML = `
            <h3>🌲 Centro-Sul</h3>
            <p>Silvicultura, trigo, cevada e pecuária. Grande preservação ambiental e reflorestamento.</p>
        `;
    }

    if(regiao === "sudoeste"){
        info.innerHTML = `
            <h3>🥛 Sudoeste</h3>
            <p>Bacias leiteiras fortes, grãos e agricultura diversificada com forte cooperativismo rural.</p>
        `;
    }
}

/* QUIZ */
function responderQuiz(valor){
    const resultado = document.getElementById("resultadoQuiz");

    if(valor === 1){
        resultado.innerHTML = "✅ Correto! A irrigação inteligente reduz o desperdício e preserva a água.";
        resultado.style.color = "green";
    }else{
        resultado.innerHTML = "❌ Resposta incorreta. Essas práticas prejudicam o meio ambiente.";
        resultado.style.color = "red";
    }
}

/* EFEITO SCROLL NAVBAR */
window.addEventListener("scroll", function(){
    const nav = document.querySelector(".navbar");

    if(window.scrollY > 50){
        nav.style.background = "rgba(0,0,0,0.80)";
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    }else{
        nav.style.background = "rgba(0,0,0,0.55)";
        nav.style.boxShadow = "none";
    }
});

/* FORMULARIO */
const form = document.querySelector(".formulario");

form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("🌱 Mensagem enviada com sucesso! Obrigado por contribuir com um futuro sustentável.");
});

/* ANIMAÇÃO DE APARECER ELEMENTOS */
const elementos = document.querySelectorAll('.desafio-card, .solucao-card, .counter-box, .compare-card, .quiz-box, .formulario');

function revelarAoScroll(){
    const gatilho = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const topo = el.getBoundingClientRect().top;

        if(topo < gatilho){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "1s";
        }
    });
}

elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", revelarAoScroll);

/* SCROLL SUAVE MENU */
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        destino.scrollIntoView({
            behavior:"smooth"
        });
    });
});