var timeEl = document.querySelector (".time")



/*
// Selects element by id
var mainEl = document.getElementById("main");

console.log("Test");

var secondsLeft = 10;
// function definition can be seen below - the definition does not have a name.
// function definition vs declaration
// declaration will always includde fctn definition, but a definition will refer to guts of function
// function definition can be an anonymous function ( function w no name - see below )
// callback functions- passing as an argument to another function because....
// following function definition does not execute until the interval elapses.
// the interval = the second; the '1000' is milliseconds in the below amnt 
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}
function CheckTime(){
    
document.getElementById("quiz-time-left").innerHTML
= 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ' ;
if(total_seconds <=0){
setTimeout('document.quiz.submit()',1);
} else {
total_seconds = total_seconds -1;
c_minutes = parseInt(total_seconds/60);
c_seconds = parseInt(total_seconds%60);
setTimeout("CheckTime()",1000);
}}
setTimeout("CheckTime()",1000);

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();
*/