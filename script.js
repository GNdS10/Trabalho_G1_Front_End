// função para descer suavemente até uma parte da página
function scrollToSection(sectionId) {
    const secao = document.getElementById(sectionId);

    secao.scrollIntoView({
        behavior: "smooth"
    });
}


// pega a área onde vão ficar as partículas
const areaParticulas = document.getElementById("particles");


// laço para criar várias bolinhas no fundo
for (let i = 0; i < 25; i++) {

    // cria uma nova div
    let bolinha = document.createElement("div");

    // define um tamanho aleatório
    let tamanho = 10 + Math.random() * 15;

    bolinha.style.position = "absolute";
    bolinha.style.width = tamanho + "px";
    bolinha.style.height = tamanho + "px";

    // deixa em formato redondo
    bolinha.style.borderRadius = "50%";

    // cor da bolinha
    bolinha.style.background = "rgba(255,255,255,0.1)";

    // posição aleatória na tela
    bolinha.style.left = Math.random() * 100 + "%";
    bolinha.style.top = Math.random() * 100 + "%";

    // tempo aleatório da animação
    let tempoAnimacao = 3 + Math.random() * 4;

    bolinha.style.animation =
        "flutuar " + tempoAnimacao + "s infinite";

    // adiciona a bolinha no fundo
    areaParticulas.appendChild(bolinha);
}


// cria a animação pelo JavaScript
let estilo = document.createElement("style");

estilo.innerHTML = `
@keyframes flutuar {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0px);
    }
}
`;

// adiciona o estilo no head da página
document.head.appendChild(estilo);