var score = 0;
var currentQuestion = -1;
var timeRemain = 0;
var timer;

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

function quizStart() {
    timeRemain = 100;
    document.getElementById("timeRemain").innerHTML = timeRemain;
    timer = setInterval(function () {
        timeRemain--;
        document.getElementById("timeRemain").innerHTML = timeRemain;

        if (timeRemain <= 0) {
            clearInterval(timer);
            gameFinish();
        }

    }, 1000);
    next()
}

function gameFinish() {
    clearInterval(timer);
    var quizResults = `
    <h2>Game Over...</h2>
    <h3>You're score was ` + score + ` /100 </h3> 
    <input type= "text" id="name" placeholder= "Name">
    <button onclick= "setScore()"> Set Score!</button>`;

    document.getElementById("quizArea").innerHTML = quizResults;

}

function correct() {
    score += 20;
    next();
}

function incorrect() {
    timeLeft -= 10;
    next();
}

function save() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);
    getScore();
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
    <h3>
        Click Start to Play!
    </h3>
    <button onclick= "start()">Start!</button>`;
    document.getElementById("quizArea").innerHTML = quizContent
}

function next() {
    currentQuestion++;
    if (currentQuestion > funQuestions.length - 1) {
        endGame();
        return;
    }
    var quiz
}
