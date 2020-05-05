let scoreDisplay = document.getElementById('scoreDisplay')
const score = localStorage.getItem('finalScore')
let scoreMessage = document.getElementById('scoreMessage')

scoreDisplay.textContent = score

if (score == 50){
   scoreMessage.innerHTML = 'Genius. You got all correct! Might as well start inventing time machines now <br> :-)'
}

if (score < 50 && score > 20){
   scoreMessage.innerHTML = "Good job. You almost got it all. But you didn't. So i'm still smarter than you <br> :-P"
}

if (score < 30 && score > 0){
   scoreMessage.innerHTML = "Nice.. but could be better. Actaully it's bad. Those were my simplest questions <br> :-("
}

if (score == 0){
   scoreMessage.innerHTML = "Oops! You got none correct... try again? LOL. Please leave... and don't come back... ever <br> :-!"
}
