const displayAnswer = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
for (let i = 0; i < displayAnswer.length; i++) {
  displayAnswer[i].addEventListener("click", function () {
    console.log("Test Button");
    answers[i].classList.toggle("hidden");
    displayAnswer[i].classList.toggle("selected");
  });
}
