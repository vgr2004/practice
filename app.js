const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars'
    },
    {
        question: 'What is the largest mammal on Earth?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctAnswer: 'Blue Whale'
    }
];

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <div class="options">
                ${question.options.map(option => `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label>`).join('')}
            </div>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

function calculateScore() {
    const userAnswers = [];
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        userAnswers.push(selectedOption ? selectedOption.value : null);
    });

    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
            score++;
        }
    });

    return score;
}

function showResult() {
    const score = calculateScore();
    resultContainer.innerHTML = `Your score: ${score} out of ${questions.length}`;
}

submitBtn.addEventListener('click', showResult);

buildQuiz();
