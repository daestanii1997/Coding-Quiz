var timerDisplay = document.querySelector(".timer");

var timeLeft = 15;

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

            questionContainer.replaceWith(finalScore);

            var scoreInput = document.createElement("input");

            scoreInput.placeholder = "Please enter your initials."

            document.getElementById("scoreLog").appendChild(scoreInput);

            // figure out how to save results and add to score with correct answers
        }

    }, 1000);
}

function multipleChoice() {

    var correctChoice = currentQuestion.correct;

    console.log(correctChoice)
};

// Set questions to display 

function runQuestions() {

    scoreLog = 0
    scoreLog.textContent = "Your Score : " + scoreLog;


    // Question 1

    askQuestions.textContent = "Please answer the following question: " + currentQuestion.question;
    choiceA.textContent = currentQuestion.choiceA;
    choiceB.textContent = currentQuestion.choiceB;
    choiceC.textContent = currentQuestion.choiceC;

    if(!currentQuestion.correct) {
        alert("Incorrect!");
        timeLeft = timeLeft - 10;
        scoreLog = scoreLog + 0;
    } else {
        
        scoreLog = scoreLog + 1;
    }

    var choiceOptions = document.querySelectorAll(".eachChoice")
    // for loop over choice options, for each option add click event listener for each click event
    choiceOptions.addEventListener("click", multipleChoice)  

    // call function inside event listener to run check for correct answer

        // console.log() value of choice


        // Question 2

        currentQuestion = quizQuestions[1];

        askQuestions.textContent = "Please answer the following question: " + currentQuestion.question;
        choiceA.textContent = currentQuestion.choiceA;
        choiceB.textContent = currentQuestion.choiceB;
        choiceC.textContent = currentQuestion.choiceC;

        


    document.querySelector(".eachChoice").addEventListener = function () {

            // Question 3

        currentQuestion = quizQuestions[2];

        askQuestions.textContent = "Please answer the following question: " + currentQuestion.question;
        choiceA.textContent = currentQuestion.choiceA;
        choiceB.textContent = currentQuestion.choiceB;
        choiceC.textContent = currentQuestion.choiceC;

        document.querySelector(".eachChoice").addEventListener = function () {
            alert("Quiz Completed");

        }

    }};

// Start button event

startButton.addEventListener("click", countDown);