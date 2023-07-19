var timerDisplay = document.querySelector(".timer");

var timeLeft = 40;

var startButton = document.querySelector(".start");

var questionContainer = document.querySelector(".main");

var askQuestions = document.querySelector(".askQuestions");

var choices = document.querySelector(".choices");

var eachChoice = document.querySelector("#eachChoice");

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

// Timer Function
function countDown(event) {
    event.preventDefault();
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = timeLeft + " seconds left";

        if(timeLeft === 0 || qIndex === 3) {
            clearInterval(timerInterval);

            timerDisplay.textContent = "Time's up!";

            // Initial container

            scoreLogEl.textContent = "Your Score : " + timeLeft;

            questionContainer.replaceWith(finalScore);

            var initialInput = document.createElement("input");

            initialInput.setAttribute("id","initials");

            initialInput.placeholder = "Please enter your initials."

            document.getElementById("finalScore").appendChild(initialInput);

            // Save Button

            var saveBtn = document.createElement("button");

            saveBtn.textContent = "Save Results";

            saveBtn.setAttribute("class","saveBtn");

            document.getElementById("finalScore").appendChild(saveBtn);

            saveBtn.addEventListener("click", saveScore());


            // figure out how to save results and add to score with correct answers
        }

    }, 1000);
}

// Function to display questions and choice buttons

function multipleChoice() {

    var currentQuestion = quizQuestions[qIndex];

    askQuestions.textContent = quizQuestions[qIndex].question;

    // console.log(quizQuestions[qIndex].question)

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
    // console.log(event.target.value);
    qIndex++;

    // console.log(qIndex);

    multipleChoice();

    if(quizQuestions[qIndex-1].correct !== event.target.value){

        // console.log("Correct answer: ",quizQuestions[qIndex].correct);

        // console.log("click event target value: ",event.target.value)

        timeLeft = timeLeft - 10
    }
    
};

choices.addEventListener("click",questionClick);

// Start button event

startButton.addEventListener("click", countDown);

//   Save button 

        // This is not calling the value of the input box

    // playerInitials = document.getElementById("initials");

    // console.log(playerInitials)

    //     localStorage.setItem("timeLeft",JSON.stringify(timeLeft));

    //     localStorage.setItem("playerInitials",JSON.stringify(playerInitials));

    // function saveScore() {

    //     var loggedScore = JSON.parse(localStorage.getItem("timeLeft"));

    //     var savedInitials = JSON.parse(localStorage.getItem("playerInitials"))

    //     // Below displays correct score but only scorelog is being saved to local storage

    //     // Local storage is showing timeLeft & scoreLog but it is showing the initial value of 40 rather than current value
        
    //     document.getElementById("savedScore").textContent = "Saved Score: " + timeLeft;

    //     document.getElementById("savedInitials").textContent = savedInitials;

    //     console.log(loggedScore);

    //     console.log(savedInitials);
    // };

    // saveBtn.addEventListener("click", saveScore());