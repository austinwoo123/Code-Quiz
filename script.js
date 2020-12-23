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
console.log(quizStart)

function gameFinish() {
    clearInterval(timer);
    var quizContent = `
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
    timeLeft -= 10;
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
    
    <button onClick="clearscore()"> Clear Score</button><button onclick="resetGame()"> Try Again!</button>
    `;

    document.getElementById("quizArea").innerHTML = quizContent;
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
    var quizContent = "<h2>" + funQuestions[currentQuestion].title + "</h2>"

    for (var buttonCycle = 0; buttonLoop < funQuestions[currentQuestion].choices.length; buttonCycle++) {
        var buttonCode = "<button on click =\"[Answer]\">[Option]</button>";
        buttonCode = buttonCode.replace("[Choice]", funQuestions[currentQuestion].choices[buttonCycle]);
        if (funQuestions[currentQuestion].choices[buttonCycle] == funQuestions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[Answer]", "Right");
        } else {
            buttonCode = buttonCode.replace("[Answer]", "Wrong");
        }
        quizContent += buttonCode
    }
    document.getElementById("quizArea").innerHTML = quizContent;

}
