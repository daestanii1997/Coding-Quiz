var timerDisplay = document.querySelector(".timer");

var timeLeft = 60;

var startButton = document.querySelector(".start");

var questionContainer = document.querySelector(".main");

var askQuestions = document.querySelector(".askQuestions");

var choices = document.querySelector(".choices");

var eachChoice = document.querySelector("#eachChoice");

var choiceA = document.querySelector("#A");

var choiceB = document.querySelector("#B");

var choiceC = document.querySelector("#C");

var scoreLog = document.querySelector("#scoreLog");

var quizQuestions = [
    {
        question : "What does DOM stand for?",
        choiceA : "Document Object Model", 
        choiceB : "Disrespect Our Mothers",
        choiceC : "Dogs On March",
        correct : "A"
    },{
        question : "Which of the following is a primitive type?",
        choiceA : "Symbol",
        choiceB : "Number",
        choiceC : "Keydown",
        correct : "B"
    },{
        question : "How many times will you see Hello World in this course?",
        choiceA : "Once",
        choiceB : "Twice",
        choiceC : "Endless amount of times",
        correct : "C"
    }
    
]

var lastQuestion = quizQuestions.length - 1;
var currentQuestion = quizQuestions[0];


// Timer Function
function countDown(event) {
    event.preventDefault();
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = timeLeft + " seconds left.";

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's up!";


            // set function to send when timer is done it brings up initial and score page
        }
    }, 1000);
}

function runQuestions() {
    var q = quizQuestions[currentQuestion];

    quizQuestions.innerHTML = "<p>" + q.quizQuestions + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

}

// Start button event
startButton.addEventListener("click", countDown, runQuestions);


