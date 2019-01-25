
     
//variables
var trivia = {
  initialScreen: "",
  correctCounter: 0,
  inCorrectCounter: 0,
  unAnsweredCounter: 0,
  gameHTML: "",
  questionsArray: [
                  "Who was the first actor to portray James Bond on screen?", "The phrase 'cul-de-sac' literally translates to what?", "The asian delicacy known as 'bird's nest soup' is made from what?", "Which Robin Williams movie was based on a novel?", "What is the offical currency of China?"],
  answerArray: [
                ["Barry Nelson", "Sean Connery", "Pierce Brosnan", "Timothy Dalton"], ["end of the line", "top of the peak", "bottom of the bag"], ["fried noodles", "bird' nests", "cabbage"], ["Dead Poets Scociety", "Good Morning, Vietnam", "Mrs. Doubtfire"], ["Renminbi", "Yen", "Chinese Dollar", "Yuan"],],
  correctAnswers: [
                "Barry Nelson", "bottom of the bag", "birds' nests", "Mrs. Doubtfire", "Renminbi"],
  imageArray: [
              "<img class='center-block img-right' src='assets/images/westelm-printed-petals-mobile.jpg'>", "<img class='center-block img-right' src='assets/images/westelm-brushstroke-floral-mobile.jpg'>", "<img class='center-block img-right' src='assets/images/west-elm-tropical-leaves-desktop-wallpaper.jpg'>", "<img class='center-block img-right' src='assets/images/west-elm-pink-flower-wallpaper-mobile-1.jpg'>", "<img class='center-block img-right' src='assets/images/west-elm-shadow-blossom-mobile.jpg'>"],
  clock: "",
  questionCounter: 0,
  timeCounter: 20,
  
};


function startScreen(){
  trivia.initialScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg start-button text-center' href='#'>Start</a></p>";
  $(".main-area").html(trivia.initialScreen);
  
};

console.log (startScreen);

 var timer = {
   start: function(){
  counter = setInterval(timeProgress.count,1000);
},
stop: function(){
  clearInterval(counter);
  time = 0;
},
count: function(){
  time++;
  console.log(time);
}
};

function wait(){
  if(trivia.questionCounter < 4) {
    trivia.questionCounter ++;
    generateHTML();
    trivia.timeCounter = 20;
    timer();
  }
  else {
    finalScreen();
  }
};

function win(){
  trivia.correctCounter ++;
  trivia.gameHTML = "<p class='text-center'> Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + trivia.correctAnswers[trivia.questionCounter] + "</p>";
  $(".main-area").html(trivia.gameHTML);
  setTimeout(wait, 4000);
};

function loss(){
  trivia.inCorrectCounter ++;
  trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>Wrong! The answer is: "+ trivia.correctAnswers[trivia.questionCounter] + "</p>" ;
	$(".main-area").html(trivia.gameHTML);
	setTimeout(wait, 4000);
};

function timeOutLoss(){
  trivia.unAnsweredCounter ++;
  trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>You ran out of time!  The answer is: " + trivia.correctAnswers[trivia.questionCounter] + "</p>";
	$(".main-area").html(trivia.gameHTML);
	setTimeout(wait, 4000);
};

function finalScreen(){
  trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'> Your Score" + "</p>" + "<p class='summary-correct'>Correct Answers: " + trivia.correctCounter + "</p>" + "<p>Wrong Answers: " + trivia.inCorrectCounter + "</p>" + "<p>Unanswered: " + trivia.unAnsweredCounter + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $(".main-area").html(trivia.gameHTML);
};

function resetGame(){
  trivia.questionCounter = 0;
  trivia.correctCounter = 0;
  trivia.inCorrectCounter = 0;
  trivia.unAnsweredCounter = 0;
  trivia.timeCounter = 20;
  generateHTML();
  timer();
};

function generateHTML(){
  trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>20</span></p><p class='text-center'>" + trivia.questionsArray[trivia.questionCounter] + "</p><button class='first-answer answer'>A. " + trivia.answerArray[trivia.questionCounter][0] + "</button><br><button class='answer'>B. "+trivia.answerArray[trivia.questionCounter][1]+"</button><br><button class='answer'>C. "+trivia.answerArray[trivia.questionCounter][2]+"</button><br><button class='answer'>D. "+trivia.answerArray[trivia.questionCounter][3]+"</button>";
  $(".main-area").html(trivia.gameHTML);
}



startScreen();

$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	generateHTML();

	timer();
}); 

$("body").on("click", ".answer", function(event){
    
  selectedAnswer = $(this).text();
	if(selectedAnswer === trivia.correctAnswers[trivia.questionCounter]) {

		clearInterval(trivia.clock);
		win();
    }
    
	else {

		clearInterval(trivia.clock);
		loss();
	}
}); 

 $("body").on("click", ".reset-button", function(event){
resetGame();
}); 
