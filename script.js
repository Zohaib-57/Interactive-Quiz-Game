const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["O2", "H2O", "CO2", "HO"],
        correctAnswer: "H2O"
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        choices: ["Brazil", "Australia", "South Africa", "India"],
        correctAnswer: "Australia"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Gold", "Iron", "Diamond", "Silver"],
        correctAnswer: "Diamond"
    },
    {
        question: "In which year did the Titanic sink?",
        choices: ["1912", "1905", "1920", "1898"],
        correctAnswer: "1912"
    },
    {
        question: "What is the capital city of Japan?",
        choices: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Who developed the theory of relativity?",
        choices: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "Which element is a key component of steel?",
        choices: ["Copper", "Iron", "Aluminum", "Lead"],
        correctAnswer: "Iron"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('choice1').textContent = currentQuestion.choices[0];
    document.getElementById('choice2').textContent = currentQuestion.choices[1];
    document.getElementById('choice3').textContent = currentQuestion.choices[2];
    document.getElementById('choice4').textContent = currentQuestion.choices[3];
}

function checkAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('score').textContent = score;
        alert('Correct!');
    } else {
        alert('Try Again!');
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('question-area').style.display = 'none';
    document.getElementById('score-area').style.display = 'none';
    document.getElementById('end-game').style.display = 'block';
    document.getElementById('final-score').textContent = `Your final score is: ${score}`;
}

function playAgain() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('question-area').style.display = 'block';
    document.getElementById('score-area').style.display = 'block';
    document.getElementById('end-game').style.display = 'none';
    loadQuestion();
}

document.getElementById('choice1').addEventListener('click', () => checkAnswer(document.getElementById('choice1').textContent));
document.getElementById('choice2').addEventListener('click', () => checkAnswer(document.getElementById('choice2').textContent));
document.getElementById('choice3').addEventListener('click', () => checkAnswer(document.getElementById('choice3').textContent));
document.getElementById('choice4').addEventListener('click', () => checkAnswer(document.getElementById('choice4').textContent));

document.getElementById('next-question').addEventListener('click', nextQuestion);

document.getElementById('play-again').addEventListener('click', playAgain);

loadQuestion();
