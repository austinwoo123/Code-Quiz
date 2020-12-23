var score = 0;
var currentQuestion = -1;
var timeRemain = 0;
var timer;

var questions = [{
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