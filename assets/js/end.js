let scoreDisplay = document.getElementById('scoreDisplay')
const score = localStorage.getItem('finalScore')
let scoreMessage = document.getElementById('scoreMessage')

scoreDisplay.textContent = score

if (score == 50){
   scoreMessage.textContent = 'Genius. You got all correct! Might as well start inventing time machines now \n :-)'
}

if (score < 50 && score > 20){
   scoreMessage.textContent = "Good job. You almost got it all. But you didn't. So i'm still smarter than you \n :-P"
}

if (score < 30 && score > 0){
   scoreMessage.textContent = "Nice.. but could be better. Actaully it's bad. Those were my simplest questions \n :-("
}

if (score == 0){
   scoreMessage.textContent = "Oops! You got none correct... try again? LOL. Please leave... and don't come back... ever \n :-!"
}
