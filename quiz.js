const data = [
  {
    ques: "HTML stands for?",
    answers: [
      { Option: "hypertext Markup langauge", correct: true },
      { Option: "hypertransfer Markup langauge", correct: false },
      { Option: "hypertransfer Makeup langauge", correct: false },
      { Option: "hypertool Markup langauge", correct: false },
    ],
  },
  {
    ques: "How many way's to link CSS?",
    answers: [
      { Option: "Two", correct: false },
      { Option: "Three", correct: true },
      { Option: "four", correct: false },
      { Option: "One", correct: false },
    ],
  },
  {
    ques: "How many way's to write JS?",
    answers: [
      { Option: "Two", correct: false },
      { Option: "Three", correct: true },
      { Option: "four", correct: false },
      { Option: "One", correct: false },
    ],
  },
  {
    ques: "To add an element at the End of an Array using ?",
    answers: [
      { Option: "pop()", correct: false },
      { Option: "push()", correct: true },
      { Option: "shift()", correct: false },
      { Option: "unshift()", correct: false },
    ],
  },
  {
    ques: "To remove an element at the End of an Array using ?",
    answers: [
      { Option: "pop()", correct: true },
      { Option: "push()", correct: false },
      { Option: "shift()", correct: false },
      { Option: "unshift()", correct: false },
    ],
  },
];

const welcomScreen = document.getElementById("welcom-screen");
const getStartBtn = document.getElementById("getStartBtn");
const quizScreen = document.getElementById("Quiz-screen");
const question = document.getElementById("Question");
const ansContainer = document.getElementById("answer-container");
const nextBtn = document.getElementById("nextBtn");

let currentQue = 0;
let score = 0;

welcomScreen.addEventListener("click", function () {
  startQuiz();
});

const startQuiz = () => {
  quizScreen.style.display = "block";
  welcomScreen.style.display = "none";
  currentQue = 0;
  score = 0;
  nextBtn.style.display = "none";
  nextBtn.innerHTML = "Next";
  displayQuiz();
};

const displayQuiz = () => {
  resetQuestion();
  question.innerHTML = data[currentQue].ques;
  data[currentQue].answers.forEach((options) => {
    const button = document.createElement("button");
    button.innerHTML = options.Option;
    button.classList.add("option");
    ansContainer.appendChild(button);

    if (options.correct) {
      button.dataset.checkAns = options.correct;
    }

    button.addEventListener("click", checkAns);
  });
};

const checkAns = (eve) => {
  const selectBtn = eve.target;
  if (selectBtn.dataset.checkAns) {
    score++;
    selectBtn.classList.add("correct-ans");
  } else {
    selectBtn.classList.add("wrong-ans");
  }

  Array.from(ansContainer.children).forEach((button) => {
    if (button.dataset.checkAns === "true") {
      button.classList.add("correct-ans");
    } else {
      button.disabled = "true";
    }
  });
  nextBtn.style.display = "block";
};

nextBtn.addEventListener("click", function () {
  if (currentQue < data.length) {
    nextQuestion();
  } else {
    startQuiz();
  }
});

const nextQuestion = () => {
  currentQue++;
  if (currentQue < data.length) {
    displayQuiz();
    nextBtn.style.display = "none";
  } else {
    displayResult();
  }
};

const displayResult = () => {
  resetQuestion();
  question.innerHTML = `
  <h2>Your quiz is completed!</h2>
  your score is <span class="score">${score}/ ${data.length}</span>`;
  nextBtn.innerHTML = "Restart Quiz";
};

const resetQuestion = () => {
  question.innerHTML = "";
  ansContainer.innerHTML = "";
};

