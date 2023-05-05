const quizData = [
    {
        question: "How many noses does a slug have?",
        a: "One",
        b: "Two",
        c: "Three",
        d: "Four",
        correct: "d",
        imgRef: "slug"
    },
    {
        question: "What is the smallest planet in our solar system?",
        a: "Mercury",
        b: "Venus",
        c: "Saturn",
        d: "Jupiter",
        correct: "a",
        imgRef: "solarsystem"
    },
    {
        question: "Which animal can change its color to match its surroundings?",
        a: "Tiger",
        b: "Chameleon",
        c: "Lion",
        d: "Elephant",
        correct: "b",
        imgRef: "camouflage"
    },
    {
        question: "What is the tallest animal in the world?",
        a: "Lion",
        b: "Elephant",
        c: "Giraffe",
        d: "Gorilla",
        correct: "c",
        imgRef: "tallanimal"
    },
    {
        question: "What is the capital city of Australia?",
        a: "Sydney",
        b: "Canberra",
        c: "Melbourne",
        d: "Brisbane",
        correct: "b",
        imgRef: "capitalcity"
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Blue Whale",
        b: "African Elephant",
        c: "Hippopotamus",
        d: "Polar Bear",
        correct: "a",
        imgRef: "largestanimal"
    },
    {
        question: "What is the name of the highest mountain in the world?",
        a: "Mount Kilimanjaro",
        b: "Mount Everest",
        c: "Mount Denali",
        d: "Mount Fuji",
        correct: "b",
        imgRef: "mountain"
    },
    {
        question: "Which planet is closest to the Sun?",
        a: "Venus",
        b: "Mars",
        c: "Mercury",
        d: "Saturn",
        correct: "c",
        imgRef: "sun"
    },
    {
        question: "Which type of animal is a penguin?",
        a: "Mammal",
        b: "Reptile",
        c: "Bird",
        d: "Fish",
        correct: "c",
        imgRef: "penguin"
    },
    {
        question: "What is the smallest continent in the world?",
        a: "Asia",
        b: "Australia",
        c: "Africa",
        d: "Europe",
        correct: "b",
        imgRef: "continents"
    },
    {
        question: "How many bones are there in the human body?",
        a: "206",
        b: "306",
        c: "106",
        d: "406",
        correct: "a",
        imgRef: "humanbones"
    },
    {
        question: "Which instrument is often called the king of instruments?",
        a: "Piano",
        b: "Violin",
        c: "Guitar",
        d: "Organ",
        correct: "d",
        imgRef: "instruments"
    },
];

/**
 * Each const gets the element for the Quiz: Question, choice, alternatives and the button to confirm
 */
const quiz = document.getElementById('quiz');
const choiceElements = document.querySelectorAll('.choice');
const questionElements = document.getElementById('question');
const text_a = document.getElementById('text_a');
const text_b = document.getElementById('text_b');
const text_c = document.getElementById('text_c');
const text_d = document.getElementById('text_d');
const questionImage = document.getElementById('questionImage');
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
    //Add image for each question
    questionImage.src = `assets/images/${currentQuizDetails.imgRef}.jpg`;

    questionElements.innerText = currentQuizDetails.question;
    text_a.innerText = currentQuizDetails.a;
    text_b.innerText = currentQuizDetails.b;
    text_c.innerText = currentQuizDetails.c;
    text_d.innerText = currentQuizDetails.d;

    
}

/* Deselect the option that was chosen for the previous question. */
function deselectOptions() {
    choiceElements.forEach(choiceElements => choiceElements.checked = false);
}

/**
 * Capture the choice that the user opted for.
 */

function getSelected() {
    let choice;

    choiceElements.forEach(choiceElements => {
        if (choiceElements.checked) {
        choice = choiceElements.id;
        }
    })

    return choice;
}

/**
 * Listen the submit button and add the correct choice to the score
 * and provide the result at the end of the quiz.
 */

submitButton.addEventListener('click', () => {
    const choice = getSelected();
    
    if (choice) {
        if (choice === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadingQuiz();
        } else {
            quiz.innerHTML = `<h2>Yey! You were right on ${score}/${quizData.length} questions.</h2>

            <button onclick="location.reload()">Start again!</button>`;
        }
    }
});