const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. Qual destas jogadas você considera mais marcante em uma partida de basquete?",
        alternativas: [
            {
                texto: "Um arremesso de 3 pontos no último segundo que define a vitória.",
                afirmacao: "Você aprecia a precisão dos arremessos de longa distância em momentos decisivos,"
            },
            {
                texto: "Uma enterrada espetacular no contra-ataque que levanta a torcida.",
                afirmacao: "Você se empolga com a força e a plasticidade das enterradas,"
            }
        ]
    },
    {
        enunciado: "2. Qual estilo de jogo você mais gosta de acompanhar em quadra?",
        alternativas: [
            {
                texto: "Um ataque rápido focado em transições eficientes e passes precisos.",
                afirmacao: "gosta de ver equipes que valorizam a velocidade e o trabalho coletivo,"
            },
            {
                texto: "Uma defesa forte e pressionante que força erros do adversário.",
                afirmacao: "entende a importância de uma defesa agressiva para dominar o jogo,"
            }
        ]
    },
    {
        enunciado: "3. Sobre a função dos jogadores, qual postura em quadra mais te chama atenção?",
        alternativas: [
            {
                texto: "A liderança do Armador organizando o time e distribuindo as jogadas.",
                afirmacao: "admira a visão de jogo dos armadores para controlar o ritmo da partida"
            },
            {
                texto: "A presença do Pivô dominando o garrafão e garantindo os rebotes.",
                afirmacao: "reconhece a força dos pivôs na disputa de espaço dentro do garrafão"
            }
        ]
    },
    {
        enunciado: "4. Qual aspecto das regras do basquete você acha essencial para o dinamismo do esporte?",
        alternativas: [
            {
                texto: "O limite de 24 segundos de posse de bola para realizar um arremesso.",
                afirmacao: "e considera que a regra dos 24 segundos deixa o esporte muito mais dinâmico."
            },
            {
                texto: "O limite de 3 segundos no garrafão para evitar que jogadores fiquem parados na área.",
                afirmacao: "e valoriza a regra dos 3 segundos para manter a movimentação constante."
            }
        ]
    },
    {
        enunciado: "5. O que torna o basquete um esporte tão apaixonante para você?",
        alternativas: [
            {
                texto: "A imprevisibilidade do placar até os últimos segundos do jogo.",
                afirmacao: "No fim, o que mais te move é a emoção de saber que o jogo pode mudar a qualquer instante!"
            },
            {
                texto: "A união entre habilidade individual e inteligência tática da equipe.",
                afirmacao: "No fim, o que mais te move é ver a combinação perfeita entre talento individual e tática!"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function telaInicial() {
    caixaPerguntas.textContent = "Bem-vindo ao Quiz do Basquete! Responda às perguntas e veja a sua visão sobre o esporte ao final.";
    textoResultado.textContent = "";
    caixaAlternativas.textContent = "";

    const botaoIniciar = document.createElement("button");
    botaoIniciar.textContent = "Iniciar Quiz";
    botaoIniciar.addEventListener("click", iniciarQuiz);
    caixaAlternativas.appendChild(botaoIniciar);
}

function iniciarQuiz() {
    atual = 0;
    historiaFinal = "";
    textoResultado.textContent = "";
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua Visão sobre o Basquete:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

    const botaoJogarNovamente = document.createElement("button");
    botaoJogarNovamente.textContent = "Jogar Novamente";
    botaoJogarNovamente.addEventListener("click", iniciarQuiz);
    caixaAlternativas.appendChild(botaoJogarNovamente);

    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar (Tela Inicial)";
    botaoReiniciar.addEventListener("click", telaInicial);
    caixaAlternativas.appendChild(botaoReiniciar);
}

telaInicial();