let score;
let correctAns;
let currentQuestion;
let answeredCorrect;
let chosenAnswer = true
let question = document.querySelector("#question");
let options = document.querySelectorAll(".option");
let nextButton = document.querySelector(".btn");
let questionCounter = document.querySelector("#question-counter");
const numOfQuestions = 5;


let dataBase = [
	{
		question:
			"1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est laboriosam perferendis labore magni! Quidem deserunt velit, libero repellat odit eligendi magni.",
		options: ['One', 'Two', 'Three', 'Four'],
		answer: 1,
	},
	{
		question:
			"2 sit amet, consectetur adipisicing elit. Est laboriosam perferendis labore magni! Quidem deserunt velit, libero repellat odit eligendi magni.",
		options: [1, 2, 3, 4],
		answer: 2
	},
	{
		question:
			"3 Lorem ipsum dolor sit ayne6be6um. Est laboriosam perferendis lah75h7b5bh7h524nu6nm84q3 nyen6bu 4",
		options: [1, 2, 3, 4],
		answer: 3
	},
	{
		question:
			"4 ipsum dolor sit amet, consectetur adipisicing elit. Est laboriosam perferendis labore magni! Quidem deserunt velit, libero repellat odit eligendi magni.",
      options: [5, 6, 7, 8],
      answer: 4
	},
	{
		question:
			"5 dolor sit amet, consectetur adipisicing elit. Est laboriosam perferendis labore magni! Quidem deserunt velit, libero repellat odit eligendi magni.",
      options: [9, 0, 11, 12],
      answer: 1
	},
];

// Init
init();

// FUNCTIONS

// initialize game
function init() {
	currentQuestion = 0;
   score = 0;
   fetchQuestions()
	nextButton.addEventListener('click', next) 
	checkOption()
}

// fetch questions from database
function fetchQuestions(){
   question.innerText = dataBase[currentQuestion].question

	options.forEach (function (option, index) {
      option.innerText = dataBase[currentQuestion].options[index]
      option.classList.remove('option-correct')
      option.classList.remove('option-wrong')
	})
	setCorrectAnswer()
}

// go to next question
function next() {
	if (currentQuestion === 4){
		return document.body.innerText = 'index.html'
   }
   
   currentQuestion++

	fetchQuestions()
	
	questionCounter.innerText = currentQuestion + 1
}

// check if clicked option is correct or wrong 
function checkOption(){
   options.forEach(function (option) {

      option.addEventListener('click', function(e){
   
         if(e.target.getAttribute('num') == correctAns.getAttribute('num')){
            
            e.target.classList.add('option-correct')
            answeredCorrect = true
            
         }
         else {
            e.target.classList.add('option-wrong')
            answeredCorrect = false
         }

         if(!answeredCorrect){
				correctAns.classList.add('option-correct')
         }
         
      })
   })
}

// set correct answer
function setCorrectAnswer() {
	options.forEach(function (option) {
		if(option.getAttribute('num') == dataBase[currentQuestion].answer){
			correctAns = option
		}
	})
}



// STATE: CAN MARK CORRECT AND WRONG; AND INDICATE RIGHT ANSWER IF WRONG