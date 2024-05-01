const quizData = [
  {
    question: "What is F# primarily used for?",
    a: "Web development",
    b: "Data science",
    c: "Mobile app development",
    d: "Game development",
    correct: "b",
  },
  {
    question: "Who developed the F# programming language?",
    a: "Anders Hejlsberg",
    b: "Simon Peyton Jones",
    c: "Don Syme",
    d: "Martin Odersky",
    correct: "c",
  },
  {
    question: "In F#, what keyword is used to define a function?",
    a: "function",
    b: "def",
    c: "fun",
    d: "fn",
    correct: "c",
  },
  {
    question: "Which of the following is NOT a feature of F#?",
    a: "Pattern matching",
    b: "Type inference",
    c: "Garbage collection",
    d: "Immutability",
    correct: "c",
  },
  {
    question: "What is the file extension for F# source files?",
    a: ".fs",
    b: ".f#",
    c: ".fsharp",
    d: ".f",
    correct: "a",
  },

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score += 1; // Increment the score by 1 for each correct answer
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      let message = '';
      if (score === quizData.length) { // If all questions are answered correctly
        message = "Congratulations! You answered all questions correctly!";
        alert("You are a F# master!");
      } else {
        message = `You answered ${score}/${quizData.length} questions correctly. `;
      }
      const resultsMessage = `
           <div class="results-message">
             <h3>${message}</h3>
             <button id="submit" onclick="location.reload()">Reload</button>
           </div>
       `;
      quiz.innerHTML = resultsMessage;
    }
  }
});
