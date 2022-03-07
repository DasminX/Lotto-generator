"use strict";

const numbersToChoose = document.querySelector(".numbers-to-choose"); // Field with all 1-49 numbers to choose

// Adding all numbers to 'numbersToChoose' field

for (let i = 0; i < 49; i++) {
  const span = document.createElement("span");
  span.classList.add("lotto__number--circle");
  span.setAttribute("data-number", i + 1);
  span.textContent = i + 1;
  numbersToChoose.append(span);
}

// Getting all span elements set above
const spans = [...document.querySelectorAll(".numbers-to-choose span")];

// Setting an array when we will push chosen span elements
let chosenNumbers = [];

// Setting active class to clicked span element and pushing them to 'chosenNumbers' array set above, if it's not there yet
spans.forEach((el) => {
  el.addEventListener("click", function () {
    if (generatedLottoNumbers.length === 6)
      return alert(
        `Już wylosowałeś 6 liczb! Wciśnij przycisk 'Nowy los', aby puścić kolejny zakład!`
      );
    if (chosenNumbers.length < 6) {
      if (el.className === "lotto__number--circle active")
        return alert(
          `Wybrałeś już liczbę ${el.getAttribute("data-number")}. Wybierz inną!`
        );
      chosenNumbers.push(+el.getAttribute("data-number"));
      el.classList.add("active");
    } else {
      alert(`Wybrałeś juz 6 liczb! Naciśnij 'Graj'.`);
    }
  });
});
