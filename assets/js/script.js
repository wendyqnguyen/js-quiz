// create a page element
var pageContentEl = document.querySelector("#page-content");

// create timer element
var timerEl = document.getElementById('countdown');

// list of all questions, choices, and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

var startButtonEl = document.querySelector("#start-button");

// create the elememts to represent all parts of the quiz
var quizEl = document.querySelector("#quiz-questions");
var quizPromptEl = document.querySelector("#quiz-prompt");
var questiontext = document.querySelector("#question-text");
var buttonEl1 = document.querySelector("#option-1");
var buttonEl2 = document.querySelector("#option-2");
var buttonEl3 = document.querySelector("#option-3");
var buttonEl4 = document.querySelector("#option-4");

var questionCounter = 0;

var timeLeft = 0;

var score = 0;

var questionIdx=0;

var taskStartQuizButtonHandler = function(event) {
  event.preventDefault();


  //hide prompt
  quizPromptEl.setAttribute('style', 'visibility: hidden');

  //start timer
  countdown();


  // if there is time remaining, load a question
  if (timeLeft > 0){
    loadQuestion();

  quizPromptEl.setAttribute('style', 'visibility: hidden');
  buttonEl1.setAttribute('style', 'visibility: visible');
  buttonEl2.setAttribute('style', 'visibility: visible');
  buttonEl3.setAttribute('style', 'visibility: visible');
  buttonEl4.setAttribute('style', 'visibility: visible');
  }
};

var loadQuestion = function (){
  // debugger;
  var questionEl = document.querySelector("#quiz-question");
  var questionText ='';
  var question = questions[questionIdx];
  var choices;

  // load question and answer options
  questionEl.textContent = question.title;
  
  choices = questions[questionIdx].choices;

  buttonEl1.textContent = choices[0];
  buttonEl2.textContent = choices[1];
  buttonEl3.textContent = choices[2];
  buttonEl4.textContent = choices[3];
  
  questiontext.textContent = questionText;
  
};


// Timer that counts down from 75
function countdown() {
timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

function displayScore () {
  
}
var checkAnswer = function(event) {
  // target button clicked
  var answerBtnEl = event.target;
  // get the answer selected
  var answerText = answerBtnEl.textContent;

  // once question is known compare the answer to the text of the button that was selected to determin if the correct answer was chosen
  // if the correct answer was selected, return
  if (answerText == questions[questionIdx].answer){
    score +=11;
    console.log(true);
  } else {
    timeLeft = timeLeft - 10;
  }

  console.log(score);
  questionIdx++;

  if (questionIdx<5){
    loadQuestion();
  } else{
    displayScore();
  }
  
  // if the incorrect answer was selected subtract 10 seconds from the timer
}

// create event listen to listen for Start Quiz button
startButtonEl.addEventListener("click", taskStartQuizButtonHandler);

buttonEl1.addEventListener("click",checkAnswer);
buttonEl2.addEventListener("click",checkAnswer);
buttonEl3.addEventListener("click",checkAnswer);
buttonEl4.addEventListener("click",checkAnswer);
