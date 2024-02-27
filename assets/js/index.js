import { questionsTable } from "./data.js";
const CORRECT_AUDIO_PATH = "assets/audio/correct.wav";
const INCORRECT_AUDIO_PATH = "assets/audio/incorrect.mp3";

const questionElement = document.getElementById("question");
const resetBtn = document.getElementById("restart-btn");
const trueBtn = document.getElementById("true");
const falseBtn = document.getElementById("false");
const scoreElem = document.getElementById("score");
const correct = new Audio(CORRECT_AUDIO_PATH);
const incorrect = new Audio(INCORRECT_AUDIO_PATH);
let questions = questionsTable;
let score = parseInt(scoreElem.textContent);
let randomIndex;

function start() {
  randomIndex = Math.floor(Math.random() * questions.length);
  questionElement.innerText = questions[randomIndex].quiz;
  trueBtn.addEventListener("click", handleAnswer);
  falseBtn.addEventListener("click", handleAnswer);
  resetBtn.addEventListener("click", (e) => {
    score = 0;
    scoreElem.innerText = score;
  });
}

function handleAnswer(e) {
  if (e.target.textContent == questions[randomIndex].response) {
    correct.play();
    score += 10;
    scoreElem.innerText = score;
  } else {
    incorrect.play();
  }
  start();
}

document.addEventListener("DOMContentLoaded", () => {
  start();
});
