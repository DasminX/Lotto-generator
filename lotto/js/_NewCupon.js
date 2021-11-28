'use strict'

const newCuponButton = document.querySelector('.new-cupon') //Getting a new cupon button

// Resetting game
function resetGame() {
    buttonPlay.disabled = false
    winningH1.classList.remove('active')
    generatedLottoNumbers.length = 0
    winningSet.clear()
    lossField.innerHTML = ''
    chosenNumbers.length = 0
    for (const span of spans) span.classList.remove('active')
}

newCuponButton.addEventListener('click', resetGame)