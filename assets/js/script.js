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

var taskStartQuizButtonHandler = function(event) {
  event.preventDefault();
  //hide promt
  quizPromptEl.setAttribute('style', 'visibility: hidden');

  // load question
  loadQuestion();

  //start timer
  countdown();

  //keep loading question while there's still time left
  
};

var loadQuestion = function (){
  var questionEl = document.createElement('div');
  var questionText ='';
  var question = questions[0];
  var choices;

  // load question and answer options
  questiontext.textContent = question.title;
  
  for( var i= 0 ; i< questions.length; i++){
    questionText =  questions[i].title;
    questionEl.textContent = questionText; 
    choices = questions[i].choices;

    buttonEl1.textContent = choices[0];
    buttonEl2.textContent = choices[1];
    buttonEl3.textContent = choices[2];
    buttonEl4.textContent = choices[3];
    
    console.log(choices);
    questiontext.textContent = questionText;
  }
};

// for answer buttons
// pageContentEl.addEventListener("click", answerButtonHandler);
var taskButtonHandler = function(event) {
  // get target element from event
  var targetEl = event.target;

  if (targetEl.matches(".edit-btn")) {
    var taskId = targetEl.getAttribute("data-task-id");
    editTask(taskId);
  } else if (targetEl.matches(".delete-btn")) {
    var taskId = targetEl.getAttribute("data-task-id");
    deleteTask(taskId);
  }
};

// Timer that counts down from 75
function countdown() {
  var timeLeft = 75;

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
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// create event listen to listen for Start Quiz button

startButtonEl.addEventListener("click", taskStartQuizButtonHandler);
