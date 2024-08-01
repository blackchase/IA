const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal diferença entre inteligência artificial fraca e forte",
        alternativas: [
            {
                texto: "A inteligência artificial fraca é especializada em tarefas específicas, enquanto a inteligência artificial forte pode lidar com uma ampla gama de tarefas cognitivas como um ser humano.",
                afirmacao: "Correta "
            },
            {
                texto: " A inteligência artificial fraca é mais avançada tecnologicamente do que a inteligência artificial forte.",
                afirmacao: "Incorreta",
            }
        ]
    },
    {
        enunciado: "Quais são os três principais tipos de aprendizado em inteligência artificial?",
        alternativas: [
            {
                
                texto: "Classificado, agrupado e reforçado.",
                afirmacao: "Incorreta",
            },
            {
                texto: "Supervisionado, não supervisionado e por reforço.",
                afirmacao: "Correta",
            }
        ]
    },
    {
        enunciado: "Como a inteligência artificial aprende no método supervisionado?",
        alternativas: [
            {
                texto: "Aprendendo a partir de dados rotulados, onde o algoritmo recebe entradas e saídas correspondentes para aprender a prever ou classificar novos dados.",
                afirmacao: "Correta."
            },
            {
                texto: "Aprendendo a partir de dados não rotulados, onde o algoritmo tenta encontrar padrões sem exemplos anteriores.",
                afirmacao: "Incorreta.",
            }
        ]
    },
    {
        enunciado: "Quais são algumas preocupações éticas associadas à inteligência artificial?",
        alternativas: [
            {
                texto: "Apenas questões técnicas relacionadas ao desempenho dos algoritmos.",
                afirmacao: "Incorreto",
            },
            {
                texto: "Viés nos dados, privacidade e segurança dos dados, impacto socioeconômico e ética do uso de IA em decisões críticas.",
                afirmacao: "Correta",
            }
        ]
    },
    {
        enunciado: "Quais setores estão se beneficiando mais da aplicação de inteligência artificial? ",
        alternativas: [
            {
                texto: "Apenas setores industriais tradicionais estão se beneficiando da IA.",
                afirmacao: "Incorreta.",
            },
            {
                texto: "Saúde, finanças, varejo, transporte, entre outros.",
                afirmacao: "Correta",
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
