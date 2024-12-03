const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2, // Index of the correct answer
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1,
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Jane Austen"],
        correct: 2,
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultsContainer = document.getElementById("results-container");
const quizContainer = document.getElementById("quiz-container");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => handleAnswer(index));
        optionsEl.appendChild(li);
    });
}

function handleAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
}

nextBtn.addEventListener("click", nextQuestion);

loadQuestion();
