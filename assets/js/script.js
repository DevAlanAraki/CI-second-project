const quizData = [
    {
        question: "How many noses does a slug have?",
        a: "One",
        b: "Two",
        c: "Three",
        d: "Four",
        correct: "d"
    },
    {
        question: "What is the largest planet in our solar system?What is the smallest planet in our solar system?",
        a: "Mercury",
        b: "Venus",
        c: "Saturn",
        d: "Jupiter",
        correct: "a"
    },
    {
        question: "Which animal can change its color to match its surroundings?",
        a: "Tiger",
        b: "Chameleon",
        c: "Lion",
        d: "Elephant",
        correct: "b"
    },
    {
        question: "What is the tallest animal in the world?",
        a: "Lion",
        b: "Elephant",
        c: "Giraffe",
        d: "Gorilla",
        correct: "c"
    },
    {
        question: "What is the capital city of Australia?",
        a: "Sydney",
        b: "Canberra",
        c: "Melbourne",
        d: "Brisbane",
        correct: "b"
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Blue Whale",
        b: "African Elephant",
        c: "Hippopotamus",
        d: "Polar Bear",
        correct: "a"
    },
    {
        question: "What is the name of the highest mountain in the world?",
        a: "Mount Kilimanjaro",
        b: "Mount Everest",
        c: "Mount Denali",
        d: "Mount Fuji",
        correct: "b"
    },
    {
        question: "Which planet is closest to the Sun?",
        a: "Venus",
        b: "Mars",
        c: "Mercury",
        d: "Saturn",
        correct: "c"
    },
    {
        question: "Which type of animal is a penguin?",
        a: "Mammal",
        b: "Reptile",
        c: "Bird",
        d: "Fish",
        correct: "c"
    },
    {
        question: "What is the smallest continent in the world?",
        a: "Asia",
        b: "Australia",
        c: "Africa",
        d: "Europe",
        correct: "b"
    },
    {
        question: "How many bones are there in the human body?",
        a: "206",
        b: "306",
        c: "106",
        d: "406",
        correct: "a"
    },
    {
        question: "Which instrument is often called the king of instruments?",
        a: "Piano",
        b: "Violin",
        c: "Guitar",
        d: "Organ",
        correct: "d"
    },
];

/**
 * Each const gets the element for the Quiz: Question, Answer, alternatives and the button to confirm
 */
const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElements = document.getElementById('question');
const text_a = document.getElementById('text_a');
const text_b = document.getElementById('text_b');
const text_c = document.getElementById('text_c');
const text_d = document.getElementById('text_d');
const submitButton = document.getElementById('submit');

/**
 * As the quiz and score will be changing during the game and between the questions - using let to allow it
 */
let currentQuestion = 0;
let score = 0;

loadingQuiz();

function loadingQuiz() {
    deselectOptions();

    const currentQuizDetails = quizData[currentQuestion];

    questionElements.innerText = currentQuizDetails.question;
    text_a.innerText = currentQuizDetails.a;
    text_b.innerText = currentQuizDetails.b;
    text_c.innerText = currentQuizDetails.c;
    text_d.innerText = currentQuizDetails.d;
}

function deselectOptions() {
    answerElements.forEach(answerElements => answerElements.checked = false);
}

function getSelected() {
    let answer;

    answerElements.forEach(answerElements => {
        if (answerElements.checked) {
        answer = answerElements.id;
        }
    })
    
    return answer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
})