let score;
let correctAns;
let currentQuestion;
let answeredCorrect;
let chosenAnswer;
let nextButton = document.querySelector(".btn");
let question = document.querySelector("#question");
let options = document.querySelectorAll(".option");
let scoreCounter = document.querySelector('#score');
let questionCounter = document.querySelector("#question-counter");
const numOfQuestions = 5;


let dataBase = [
	{
		question:
			"Can you fill the blank space? \n 19 = 8 ,  6 = 3 , 70 = 7 , 8 = 5 , 4 = 4 , 60 = 5 , 15 = 7 , 16 = ? , 17 = ?",
		options: ['5 & 10', '11 & 6', '7 & 9', '3 & 8'],
		answer: 3,
	},
	{
		question:
			"How many fingers do you have?",
		options: [8, 9, 10, 11],
		answer: 1
	},
	{
		question:
			"Which is a hypothetical string theory weightless particle?",
		options: ['the Earth', 'Graviton', 'Nebuleon', 'atoms'],
		answer: 2
	},
	{
		question:
			"Choose the right spelling. Also remember this: blue, red, blue, yellow.",
      options: ['Antidistestablishmenterianism', 'the right spelling', 'Antidisastablishmenterianism', 'Antidisestablishmentarianism'],
      answer: 4
	},
	{
		question:
			"Which of these creatures is real?",
      options: ['fish in trees', 'xenomorph', 'grunt helms', 'barrel bears'],
      answer: 1
	},
];

// Init
init();

// FUNCTIONS

// initialize game
function init() {
   score = 0;
	chosenAnswer = false
	currentQuestion = 0;
   fetchQuestions()
	checkOption()
	togggleNextButton()
	next()
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
	
	chosenAnswer = false

	togggleNextButton()
}

// go to next question
function next(){
		nextButton.addEventListener('click', function(){
		if (currentQuestion === 4){
			localStorage.setItem('finalScore', score)
			return window.location.href = "end.html"
		}

		if (currentQuestion === 3){
			nextButton.textContent = 'Finish '
		}
		
		currentQuestion++

		fetchQuestions()
		
		questionCounter.innerText = currentQuestion + 1

	})}

// check if clicked option is correct or wrong 
function checkOption(){
   options.forEach(function (option) {

      option.addEventListener('click', function(e){
   
         if(!chosenAnswer){
				
				if(e.target.getAttribute('num') == correctAns.getAttribute('num')){
            
					e.target.classList.add('option-correct')
					answeredCorrect = true
					score += 10
					scoreCounter.textContent = score
					
				}
				else {
					e.target.classList.add('option-wrong')
					answeredCorrect = false
				}
	
				if(!answeredCorrect){
					correctAns.classList.add('option-correct')
				}
	
			}
			chosenAnswer = true
			togggleNextButton()
         
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

// Show and Hide Next button
function togggleNextButton() {
	if(!chosenAnswer){
		nextButton.style.display = 'none'
	}
	else{
		nextButton.style.display = 'inline-block'
	}
}





// STATE: CAN MARK CORRECT AND WRONG; AND INDICATE RIGHT ANSWER IF WRONG
// STATE: COUNTS SCORES AND DISABLES NEXT BUTON WHEN ANSWER HAS NOT BEEN CHOSEN
// STATE: STORES SCORE IN LOCAL STORAGE