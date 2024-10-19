const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer');
const nextButton = document.getElementById('next-btn');
const questionNumber = document.getElementById('question-number');

let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital of Japan?",
        answers: ["Beijing", "Bangkok", "Seoul", "Tokyo"],
        correct: "Tokyo"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars"
    }
    // You can add more questions here
];

function loadQuestion() {
    const currentData = questions[currentQuestion];
    questionElement.textContent = currentData.question;
    questionNumber.textContent = `${currentQuestion + 1}/${questions.length}`;
    
    answerButtons.forEach((button, index) => {
        button.textContent = currentData.answers[index];
        button.addEventListener('click', () => selectAnswer(currentData.answers[index]));
    });
}

function selectAnswer(selected) {
    const correctAnswer = questions[currentQuestion].correct;
    if (selected === correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = `You scored ${score}/${questions.length}`;
    answerButtons.forEach(button => button.remove());
    nextButton.remove();
}

nextButton.addEventListener('click', loadQuestion);

// Initial load
loadQuestion();
