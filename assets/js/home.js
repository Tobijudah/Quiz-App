let popUpButton = document.querySelector('#help');
let popUp = document.querySelector('#pop-up');
let body = document.querySelector('.container');
let pop = false

popUpButton.addEventListener('click', function() {
   if (!pop){
      popUp.style.display= 'block'
      popUpButton.textContent = 'close'
      body.style.display = 'none'
      pop = true
   } else {
      popUp.style.display = 'none'
      popUpButton.textContent = 'Instructions'
      body.style.display = ''
      pop = false
   }
   
  })