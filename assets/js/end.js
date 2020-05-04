let scoreDisplay = document.getElementById('scoreDisplay')
const score = localStorage.getItem('finalScore')
let scoreMessage = document.getElementById('scoreMessage')

scoreDisplay.textContent = score

if (score == 50){
   scoreMessage.textContent = 'You got all correct! Welldone.'
}

if (score < 50 && score > 20){
   scoreMessage.textContent = 'Good job. You alomst got it all'
}

if (score < 30 && score > 0){
   scoreMessage.textContent = 'Nice.. but could be better'
}

if (score == 0){
   scoreMessage.textContent = 'Oops! You got none correct... try again?'
}
