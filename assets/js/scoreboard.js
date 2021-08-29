var goBackButtonEl = document.querySelector("#go-back"); 
var clearScoreButtonEl = document.querySelector("#clear-score"); 

var loadScores = function() {

  // Retrieve high score
  var highscore = JSON.parse(localStorage.getItem('highscores'));
    // if there are high scores, return out of the function
    if (!highscore) {
      return false;
    } else {
    // else, load up saved scores


    var highScoreEl = document.querySelector("#high-score");

    highScoreEl.innerHTML = "<p>1. " + highscore.initials + " - " + highscore.score + "</p>";
    
    }
    
  };
  
  var createScore = function(savedTasks) {
    
    }

loadScores();


goBackButtonEl.addEventListener("click", function (){
    
  window.location.href = "index.html";
});

clearScoreButtonEl.addEventListener("click", function (){
    localStorage.clear();
    location.reload();
  });