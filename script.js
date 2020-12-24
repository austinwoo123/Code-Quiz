var score = 0;
var currentQuestion = -1;
var timeRemain = 0;
var timer;
var starter = document.querySelector("#starter");
var funQuestions = [{
    prompt: "What is the most common natural object to be mistaken for a UFO?",
    options: ["airplane", "bird", "venus", "moon"],
    answer: "Venus"
},
{
    prompt: "The average person does what thirteen times a day?",
    options: ["burps", "sneeze", "smile", "laugh"],
    answer: "laugh"
},
{
    prompt: "Where was the fortune cookie invented?",
    options: ["hong Kong", "seatle", "new york", "san francisco"],
    answer: "San Francisco",

},
{
    prompt: "In Minnesota it is illegal to tease what type of animal?",
    options: ["squirrel", "rabbit", "skunk", "dogs"],
    answer: "skunk"
}
]

starter.addEventListener("click", quizStart);
function quizStart() {

    timeRemain = 10;
    document.getElementById("timeRemaining").innerHTML = timeRemain;
    timer = setInterval(function () {
        timeRemain--;
        document.getElementById("timeRemaining").innerHTML = timeRemain;

        if (timeRemain <= 0) {
            clearInterval(timer);
            gameFinish();
        }

    }, 1000);

    next()
}
// console.log(quizStart)
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var option5 = document.getElementById("option5");
var question = document.getElementById("quizArea");
function next() {
    question.innerHTML = funQuestions[0].prompt
    option1.innerHTML = funQuestions[0].options

    // console.log(funQuestions[0].prompt)



}
var quizContent
function gameFinish() {
    clearInterval(timer);
    quizContent = `
    <h2>Game Over...</h2>
    <h3>You're score was ` + score + ` /100 </h3> 
    <input type= "text" id="name" placeholder= "Name">
    <button onclick="save()"> Save!</button>`;

    document.getElementById("quizArea").innerHTML = quizContent;

}

function correct() {
    score += 20;
    next();
}

function incorrect() {
    score -= 10;
    next();
}

function save() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);
    recordScore();
}

function recordScore() {
    var quizArea = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is: </h2>
    <h1>` + localStorage.getItem("highscore") + ` </h1><br>
    
    <button onClick="clearScore()"> Clear Score</button><button onclick="resetGame()"> Try Again!</button>
    `;

    document.getElementById("quizArea").innerHTML = quizContent;
}

function clearScore() {


    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");

    resetGame();

}


function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeRemain = 0;
    timer = null;
    document.getElementById("timeRemain").innerHTML = timeRemain;

    var quizContent = `
    <h1>
        Fun Quiz!
    </h1>
    <h2>
        Click Start to Play!
    </h2>
    <button onclick= "start()">Start!</button>`;
    document.getElementById("quizArea").innerHTML = quizContent
}











    // currentQuestion++;
    // if (currentQuestion > funQuestions.length - 1) {
    //     endGame();
    //     return;
    // }
    // var quizContent = "<h2>" + funQuestions[currentQuestion].title + "</h2>"

    // for (var buttonCycle = 0; buttonLoop < funQuestions[currentQuestion].choices.length; buttonCycle++) {
    //     var buttonCode = "<button on click =\"[Answer]\">[Option]</button>";
    //     buttonCode = buttonCode.replace("[Choice]", funQuestions[currentQuestion].choices[buttonCycle]);
    //     if (funQuestions[currentQuestion].choices[buttonCycle] == funQuestions[currentQuestion].answer) {
    //         buttonCode = buttonCode.replace("[Answer]", "Right");
    //     } else {
    //         buttonCode = buttonCode.replace("[Answer]", "Wrong");
    //     }
    //     quizContent += buttonCode
    // }
    // document.getElementById("quizArea").innerHTML = quizContent;


