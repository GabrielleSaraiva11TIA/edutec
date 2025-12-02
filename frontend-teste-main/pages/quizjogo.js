const questions = [
    {
        question: "Ártico: Quais são alguns dos principais impactos das mudanças climáticas na agricultura brasileira?",
        answers: [
            { id: 1, text: "Aumento da fertilidade do solo e menos irrigação.", correct: false },
            { id: 2, text: "Queda na produção, alta nos preços e mudanças no cultivo.", correct: true },
            { id: 3, text: "Fim das geadas e chuvas fortes, produção previsível.", correct: false },
            { id: 4, text: "Crescimento acelerado das plantas com o calor.", correct: false },
        ],
    },
    {
        question: "Ártico: Quais efeitos o aquecimento global pode causar até o fim do século?",
        answers: [
            { id: 1, text: "Redução de ondas de calor e aumento do frio.", correct: false },
            { id: 2, text: "Estabilidade climática e melhora na saúde humana.", correct: false },
            { id: 3, text: "Temperatura até 2 °C maior, mais secas, enchentes e calor extremo.", correct: true },
            { id: 4, text: "Aumento do frio e diminuição de enchentes.", correct: false },
        ],
    },
    {
        question: "Ártico: Qual é o papel da educação climática?",
        answers: [
            { id: 1, text: "Aumentar a produtividade agrícola e reduzir os custos de produção.", correct: false },
            { id: 2, text: "Eliminar a necessidade de participação de governos e ONGs.", correct: false },
            { id: 3, text: "Promover a compreensão do clima e decisões conscientes para a sustentabilidade.", correct: true },
            { id: 4, text: "Garantir apenas a preservação de florestas tropicais.", correct: false },
        ],
    },
    {
        question: "Ártico: Quais medidas e fatores estão relacionados ao aquecimento global?",
        answers: [
            { id: 1, text: "Gases como COz, CH4 e N2O aumentam o efeito estufa, e o Acordo de Paris busca limitar o aquecimento a 1,5 °C.", correct: true },
            { id: 2, text: "Oxigênio e nitrogênio são gases do efeito estufa, e o Tratado de Versalhes limita a temperatura global.", correct: false },
            { id: 3, text: "Gases como He e Ar provocam aquecimento, e o Protocolo de Montreal limita a emissão de gases.", correct: false },
            { id: 4, text: "Hidrogênio e vapor de água causam efeito estufa, e o Protocolo de Kyoto controla a temperatura.", correct: false },
        ],
    },
    {
        question: "Ártico:  Quais são alguns impactos do aquecimento global na saúde e no meio ambiente?",
        answers: [
            { id: 1, text: "Redução da poluição do ar e diminuição de doenças.", correct: false },
            { id: 2, text: "Mais doenças, ondas de calor, poluição, riscos para animais e elevação do nível do mar..", correct: true },
            { id: 3, text: "Menos riscos à saúde humana e maior estabilidade climática.", correct: false },
            { id: 4, text: "Controle natural de vetores e fim das inundações costeiras.", correct: false },
        ],
    },
    {
        question: "Ártico: Quais são alguns impactos das mudanças climáticas sobre a biodiversidade?",
        answers: [
            { id: 1, text: "Extinção de espécies, danos aos oceanos, fragilidade das florestas e risco de incêndios.", correct: true },
            { id: 2, text: "Preservação dos ecossistemas e redução do CO₂.", correct: false },
            { id: 3, text: "Fortalecimento da vida marinha e equilíbrio das florestas.", correct: false },
            { id: 4, text: "Estabilidade do clima global e proteção da economia.", correct: false },
        ],
    },
    {
        question: "Ártico: Quais são alguns efeitos do derretimento das calotas polares?",
        answers: [
            { id: 1, text: "Redução do aquecimento global e equilíbrio climático.", correct: false },
            { id: 2, text: "Maior estabilidade para espécies polares e menor risco ambiental.", correct: false },
            { id: 3, text: "Elevação do nível do mar, perda de habitat, impactos na cadeia alimentar e liberação de metano.", correct: true },
            { id: 4, text: "Diminuição das mudanças climáticas e proteção dos oceanos.", correct: false },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        // agora marca a resposta correta
        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // mostra qual era a correta
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();

    const box = document.querySelector('.box');
    box.classList.add('final-box');

    questionElement.innerHTML = `
    <div class="titulo-final">
    <h2>Obrigada por ajudar!
    Ártico é grato por seu esforço...</h2>
    </div>
    
    <div class="final-container">
        <h2 class="final-title">🎉 Parabéns! 🎉</h2>
        <p class="final-score">Você acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas.</p>
    </div>
`;
    document.body.style.backgroundImage = "url('imagens-jogo/Fuga Gelada (8).svg')";
    nextButton.innerHTML = "Voltar ao inicio";
    nextButton.style.display = "block";
    nextButton.style.margin = "0 auto";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", () => {
        window.location.href = "jogo1.html";
    });
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    handleNextButton();
});

startQuiz();
