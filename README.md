# Code-Quiz
This project was about creating a multiple-choice quiz that is interactive and can adapt to multiple screen sizes. The quiz should include an HTML, CSS, and javascript and must include a timer. 
## Getting Started
1. Copy the repo from GitLab using your ssh key
2. Run Git bash
3. Type in "code ." to open Visual Studios Code
4. Open the index.html, script.js, and style.css file

## Technologies Used
- HTML -used to create elements on the DOM
- CSS- styles html elements on page
- Git- version control system to track changes to source code
- GitHub- hosts repository that can be deployed to GitHub Pages
- BootStrap CSS Framework- Quickly design and customize responsive mobile-first sites using front-end open source toolkit, featuring SASS variables and mixins, responsive grid system, and prebuilt components.
- JavaScript- Programming language that is used to prompt the user and generate a random password based on the user's inputs. 
- Web API- An application programming interface for either a web server or a web browser.

## Screenshot


## Code Snippet
```
var funQuestions = [{
    prompt: "What is the most common natural object to be mistaken for a UFO?",
    options: ["airplane", "bird", "venus", "moon"],
    answer: "Venus"
},

```
This code shows how I arranged my questions and answers to be displayed as a string for the display of questions and answers, and set the possible answers to the questions as an array. 

```
<div class="left">
            <a onclick="getScore()" href="#">
                <h3>View Highscores</h3>
            </a>
        </div>
        <div class="right">
            <h3>Time Remaining: <span id="timeLeft">0</span></span></h3>
```
This code shows how I created 2 div classes ("view highscores" and "time remaining") and made them float to the left and right side of the page.

## Deployed Link

* [https://austinwoo123.github.io/Code-Quiz/]

## Authors
Austin Woo
- [Link to Portfolio Site](https://github.com/austinwoo123/Code-Quiz)
- [Link to Github](https://github.com/austinwoo123)
- [Link to LinkedIn](https://www.linkedin.com/in/awoo95/)

## License

This project is licensed under the UC Berkeley Extension