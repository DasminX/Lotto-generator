"use strict";

const buttonPlay = document.querySelector(".play"); // Getting a button 'Play'

// An array including all lotto numbers which can be used
const allLottoNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49,
];

const lossField = document.querySelector(".random-lotto-numbers"); // Getting field where we display generated numbers

const generatedLottoNumbers = []; // An array when we will push generated numbers

const winningSpans = [
  ...document.querySelectorAll(".random-lotto-numbers span"),
];

const winningSet = new Set(); // Creating a Set, where chosen numbers and random generated numbers will be pushed, and according to this winning condition will be displayed

const winningH1 = document.querySelector(".winning-h1"); // Getting h1 element which displays a score

function generateAndDisplayNumber() {
  if (chosenNumbers.length < 6) return alert(`Nie wybrałeś 6 liczb!`);
  buttonPlay.disabled = true;

  // Creating a random number, pushing it to 'generatedLottoNumbers' array, if the same element exists, getting random again, if doesn't, it leaves it in array and sort from min to max
  for (let i = 0; i < 6; i++) {
    const generateNumber = allLottoNumbers[Math.floor(Math.random() * 49)];

    if (generatedLottoNumbers.includes(generateNumber)) {
      i--;
      continue;
    } else {
      generatedLottoNumbers.push(generateNumber);
      generatedLottoNumbers.sort((a, b) => a - b);
    }
  }

  // After having 6 numbers in 'generatedLottoNumbers' array, below we create new spans for each number and we display it in lossField in DOM
  for (const genNum of generatedLottoNumbers) {
    const span = document.createElement("span");
    span.classList.add("lotto__number--circle");
    span.setAttribute("data-number", genNum);
    span.textContent = genNum;
    lossField.append(span);
    winningSpans.push(span);
    // Adding generated numbers to a created Set
    winningSet.add(genNum);
  }

  // Getting an array of common elements of two arrays
  const commonElementsInArrays = chosenNumbers.filter((value) =>
    generatedLottoNumbers.includes(value)
  );

  // Checking if 'commonElementsInArray' array includes a specific number, and if does, add blinking to highlight matching number
  winningSpans.forEach((winningSpan) => {
    if (
      commonElementsInArrays.includes(+winningSpan.getAttribute("data-number"))
    )
      setInterval(() => {
        winningSpan.classList.toggle("active");
      }, 400);
  });

  // Adding chosen numbers to a created Set
  for (const number of chosenNumbers) {
    winningSet.add(number);
  }

  // Winning conditions
  if (winningSet.size >= 10) {
    winningH1.textContent = `Nic nie wygrałeś 🙁`;
  } else if (winningSet.size === 9) {
    winningH1.textContent = `Wygrałeś 24 zł! 💪`;
  } else if (winningSet.size === 8) {
    winningH1.textContent = `Wygrałeś 177 zł! 💪💪`;
  } else if (winningSet.size === 7) {
    winningH1.textContent = `Wygrałeś 5 555 zł! 💪💪💪`;
  } else if (winningSet.size === 6) {
    winningH1.textContent = `Wygrałeś 2 000 000 zł! 💪💪🚀💪💪`;
  }

  // Displaying an info about result by adding class to h1 to become visible
  winningH1.classList.add("active");
}

buttonPlay.addEventListener("click", generateAndDisplayNumber);
