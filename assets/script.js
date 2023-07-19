var timerDisplay = document.querySelector(".timer");

var timeLeft = 3;

var startButton = document.querySelector(".start");

var questionContainer = document.querySelector(".main");

var askQuestions = document.querySelector(".askQuestions");

var choices = document.querySelector(".choices");

var eachChoice = document.querySelector("#eachChoice");

var choiceA = document.querySelector("#A");

var choiceB = document.querySelector("#B");

var choiceC = document.querySelector("#C");

var scoreLogEl = document.querySelector("#scoreLog");

scoreLogEl.setAttribute("class","score")

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

// ScoreLog 

var scoreLog = timeLeft;
// scoreLogEl.textContent = "Your Score : " + scoreLog;

// Timer Function
function countDown(event) {
    event.preventDefault();
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = timeLeft + " seconds left";

        if(timeLeft === 0) {
            clearInterval(timerInterval);

            timerDisplay.textContent = "Time's up!";

            // Initial container

            scoreLogEl.textContent = "Your Score : " + scoreLog;

            questionContainer.replaceWith(finalScore);

            var initialInput = document.createElement("input");

            initialInput.setAttribute("class","initials");

            initialInput.placeholder = "Please enter your initials."

            document.getElementById("finalScore").appendChild(initialInput);

            // Save Button

            var saveBtn = document.createElement("button");

            saveBtn.textContent = "Save Results";

            saveBtn.setAttribute("class","saveBtn");

            document.getElementById("finalScore").appendChild(saveBtn);


            // figure out how to save results and add to score with correct answers
        }

    }, 1000);
}

// Function to display questions and choice buttons

function multipleChoice() {

    var currentQuestion = quizQuestions[qIndex];

    askQuestions.textContent = quizQuestions[qIndex].question;

    choices.innerHTML = "";

    for(let i = 0; i < currentQuestion.choices.length; i++) {

       var answerButton = document.createElement("button");

       answerButton.textContent = currentQuestion.choices[i];

       answerButton.setAttribute("class","answer-btn");

       answerButton.setAttribute("value",currentQuestion.choices[i]);

       choices.appendChild(answerButton);
        
    };

};

// Set questions to display 

multipleChoice();

function questionClick(event){
    console.log(event.target.value);

    qIndex++;

    console.log(qIndex);

    multipleChoice();

    // if(quizQuestions[qIndex].correct === this.event){

    //     console.log(quizQuestions[qIndex].correct);

    //     console.log(this.event)

    //     scoreLog = scorelog - 10;
    // }
    
};

choices.addEventListener("click",questionClick);

// Start button event

startButton.addEventListener("click", countDown);

 // Save button Click Event

    // playerInitials = document.getElementsByTagName("initials").value;

    // console.log(playerInitials)

    //     localStorage.setItem("scoreLog",JSON.stringify(scoreLog));

    //     localStorage.setItem("playerInitials",JSON.stringify(playerInitials));

    // function saveScore() {
    //     var loggedScore = JSON.parse(localStorage.getItem("scoreLog"));

    //     var savedInitials = JSON.parse(localStorage.getItem("playerInitials"))

    //     document.getElementById("savedScore").textContent = loggedScore;

    //     document.getElementById("savedInitials").textContent = savedInitials;

    //     console.log(loggedScore);

    //     console.log(savedInitials);
    // };

    // saveBtn.addEventListener("click", saveScore());