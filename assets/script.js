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

var scoreLogEl = document.querySelector("#scoreLog");

var qIndex = 0;

var quizQuestions = [
    {
        question : "What does DOM stand for?",
        choices : [
            "Disrespect Our Mothers",
            "Dogs On March",
            "Document Object Model",
        ],
        correct : "Document Object Model"
    },{
        question : "Which of the following is a primitive type?",
        choices : [
            "Symbol",
            "Number",
            "Keydown",
        ],
        correct : "Number"
    },{
        question : "How many times will you see Hello World in this course?",
        choices : [
            "Once",
            "Twice",
            "Endless amount of times",
        ],
        correct : "Endless amount of times"
    }
    
]



// var currentQuestion = quizQuestions[qIndex];
// console.log(currentQuestion)

scoreLog = 0
scoreLogEl.textContent = "Your Score : " + scoreLog;

// Timer Function
function countDown(event) {
    event.preventDefault();
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = timeLeft + " seconds left.";

        if(timeLeft === 0) {
            clearInterval(timerInterval);

            timerDisplay.textContent = "Time's up!";

            // Initial container

            questionContainer.replaceWith(finalScore);

            var initialInput = document.createElement("input");

            initialInput.placeholder = "Please enter your initials."

            document.getElementById("finalScore").appendChild(initialInput);

            // figure out how to save results and add to score with correct answers
        }

    }, 1000);
}

function multipleChoice() {

    var currentQuestion = quizQuestions[qIndex];
// console.log(currentQuestion)

    // console.log(qIndex)
    askQuestions.textContent = quizQuestions[qIndex].question;

    choices.innerHTML = "";

    for(let i = 0; i < currentQuestion.choices.length; i++) {

        console.log("this is i:" + i)

       console.log(currentQuestion.choices[i]);

       var answerButton = document.createElement("button");

       answerButton.textContent = currentQuestion.choices[i];

       answerButton.setAttribute("class","answer-btn");

       answerButton.setAttribute("value",currentQuestion.choices[i]);

       choices.appendChild(answerButton);
        
    };
};

    // var correctChoice = currentQuestion.correct;

    // console.log(correctChoice)

// Set questions to display 
multipleChoice();

function questionClick(event){
    console.log(event.target.value);

    qIndex++;

    console.log(qIndex);

    multipleChoice();
    
};

choices.addEventListener("click",questionClick);

// function runQuestions() {

//     // Question 1

//     // askQuestions.textContent = "Please answer the following question: " + currentQuestion.question;
   

//     var choiceOptions = document.querySelectorAll(".eachChoice")
//     // for loop over choice options, for each option add click event listener for each click event
//     // choiceOptions.addEventListener("click", multipleChoice)  

//     // call function inside event listener to run check for correct answer

//         // console.log() value of choice


//         // Question 2

//         currentQuestion = quizQuestions[1];

//         // askQuestions.textContent = "Please answer the following question: " + currentQuestion.question;
     
//     // document.querySelector(".eachChoice").addEventListener = function () {

//             // Question 3

//         currentQuestion = quizQuestions[2];

//         // askQuestions.textContent = "Please answer the following question: " + currentQuestion.question;

//     // }};
// };

// Start button event

startButton.addEventListener("click", countDown);