var timerDisplay = document.querySelector(".timer");

var timeLeft = 15;

var startButton = document.querySelector(".start");

var questionContainer = document.querySelector(".main");

var askQuestions = document.querySelector(".askQuestions");

var choices = document.querySelector(".choices");

var eachChoice = document.querySelector("#eachChoice");

var scoreLog = document.getElementById("#scorelog")

var scoreLogEl = document.querySelector("#finalScore");

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
    
];

var currentQuestion = quizQuestions[qIndex];

// Score Log initiator

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

            initialInput.getAttribute("id", "initials")

            var saveBtn = document.createElement("button");

            saveBtn.textContent = "Submit";

            initialInput.placeholder = "Please enter your initials."

            // document.getElementById("finalScore").appendChild(initialInput);

            // document.getElementById("finalScore").appendChild(saveBtn);

            // figure out how to save results and add to score with correct answers
        }

    }, 1000);
}

// Start button event

startButton.addEventListener("click", countDown);

// Choices for loop

function multipleChoice() {

    console.log(qIndex)
    askQuestions.textContent = currentQuestion.question;

    choices.innerHTML = ""

    for (let i = 0; i < currentQuestion.choices.length; i++) {

        askQuestions.textContent = currentQuestion.question;

       console.log(currentQuestion[i]);

       var answerButton = document.createElement("button");

       answerButton.textContent = currentQuestion.choices[i];

       answerButton.setAttribute("class","answer-btn");

       answerButton.setAttribute("value",currentQuestion.choices[i]);

       choices.appendChild(answerButton);
        
    }
    // var correctChoice = currentQuestion.correct;

    // console.log(correctChoice)
};

// Set questions to display 

multipleChoice();



function questionClick(event){

    event.preventDefault();

    console.log(event.target.value);

    qIndex++;

    console.log(qIndex);

    console.log(event);

    multipleChoice();

    // runQuestions();
    
};

choices.addEventListener("click",questionClick);

// function runQuestions() {

    // choices.innerHTML = ""

    // for (let i = 0; i < quizQuestions.question.length; i++) {

    // askQuestions.textContent = "Please answer the following question: " + quizQuestions[i].question; 
    
    // console.log(quizQuestions[i].question);
        
    // }};

    // Question 1

        // askQuestions.textContent = "Please answer the following question: " + quizQuestions[qIndex].question;

    //    choices.addEventListener = function () {

    // choices.addEventListener("click",questionClick);

            // currentQuestion = quizQuestions[1];

            //     askQuestions.textContent = "Please answer the following question: " + currentQuestion.question;

            //     console.log(currentQuestion);

    // choices.addEventListener("click",questionClick);
       
                // choices.addEventListener = function () {

            // Question 3

    //         currentQuestion = quizQuestions[2];

    //             askQuestions.textContent = "Please answer the following question: " + currentQuestion.question;
    //     }
    // // }}
    // ;

        

    // call function inside event listener to run check for correct answer

        // Question 2

        // currentQuestion = quizQuestions[1];

        //     askQuestions.textContent = "Please answer the following question: " + currentQuestion.question;

    //    choices.addEventListener = function () {

    //         // Question 3

    //     currentQuestion = quizQuestions[2];

    //         askQuestions.textContent = "Please answer the following question: " + currentQuestion.question;
        

    //     choices.addEventListener = function () {
            

    //     }}
    // };

    // Save button Click Event

    // playerInitials = document.getElementsByTagName("initials").value;

    // saveBtn.addEventListener("click", function(event) {
        
    //     event.preventDefault();

    //     localStorage.setItem("scoreLog",JSON.stringify(scoreLog));

    //     localStorage.setItem("playerInitials",JSON.stringify(playerInitials));

    //     saveScore();
    // });

    // function saveScore() {
    //     var loggedScore = JSON.parse(localStorage.getItem("scoreLog"));

    //     var savedInitials = JSON.parse(localStorage.getItem("playerInitials"))

    //     document.getElementById("savedScore").textContent = loggedScore;

    //     document.getElementById("savedInitials").textContent = savedInitials;

    //     console.log(loggedScore);

    //     console.log(savedInitials);
    // };

