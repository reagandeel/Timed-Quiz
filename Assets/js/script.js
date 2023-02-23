// Establishing JS variables

var timeAlert = document.querySelector (".timeAlert");
var startBtn = document.getElementById ("startBtn");
var timeLeft = 75;
var innerContainer = document.getElementById ("innerContainer");
var optionA = document.getElementById ("optionA");
var optionB = document.getElementById ("optionB");
var optionC = document.getElementById ("optionC");
var optionD = document.getElementById ("optionD");
var correctChoice = document.getElementById ("correctChoice");
var quizQuestions = document.getElementById ("quizQuestions");
var mainQuestion = document.getElementById ("mainQuestion");
var score = document.querySelector (".score");
var highScores = [];
var output = "";
var score= 0;
let i=0;

// Setting up the Information for the Timer
// var timerInterval = setInterval(setTimer,1000);

// 

function setTimer (){
  timeLeft--;
  console.log (timeLeft);
  if(timeLeft < 0) {
    timesUp();
    timeLeft = 0;
  }
  timeAlert.textContent = timeLeft;
}

// Quiz Begins!

var questionsArray = [
  {
    question: "What is the HTML tag under which you can write the JavaScript code?",
    option: {
      a: "A) <javascript>",
      b: "B) <js>",
      c: "C) <script>",
      d: "D) <scripted>",
    },
    correctChoice: "c"
  },

  {
    question: "What is used to style the HTML page?",
    option: {
      a: "A) <style>", 
      b: "B) Cascading Style Sheet", 
      c: "C) Color Style Sheet", 
      d: "D) Design Sheet",
    },
    correctChoice: "b"
  },
  {
    question: "Which of the following do you use to establish a variable in JavaScript?",
    option: {
      a: "A) var",
      b: "B) <var>",
      c: "C) <setvar>",
      d: "D) variable",
    },
    correctChoice: "b"
  },
 
];

startBtn.addEventListener("click", function() {
 quizQuestions.style.display = "block";
 innerContainer.style.display = "none";
 timeAlert.style.display = "block";
 timeAlert.textContent = timeLeft;
 setInterval(setTimer, 1000);
 setQuizQuestions();

})

function setQuizQuestions () {
  var mainQuestion = document.getElementById ("mainQuestion");
  mainQuestion.textContent = questionsArray[0].question;
  // console.log (questionsArray[0].question);
  optionA.textContent = questionsArray[0].option.a;
  optionB.textContent = questionsArray[0].option.b;
  optionC.textContent= questionsArray[0].option.c;
  optionD.textContent = questionsArray[0].option.d;
}

optionA.addEventListener("click", function() {
 
});
