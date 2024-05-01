const quizData = [
  {
    question: "Who developed C# Programming Language?",
    a: "James Gosling",
    b: "Anders Hejlsberg",
    c: "Dennis Ritchie",
    d: "Bjarne Stroustrup",
    correct: "b",
  },
  {
    question: "Which of the following statements is true about C#?",
    a: "C# is a low-level programming language.",
    b: "C# is a case-sensitive language.",
    c: "C# is platform-dependent.",
    d: "C# is primarily used for web development only.",
    correct: "b",
  },
  {
    question: "What does 'CLR' stand for in C#?",
    a: "Common Logic Runtime",
    b: "Common Language Runtime",
    c: "Common Language Regulation",
    d: "Common Language Rendering",
    correct: "b",
  },
  {
    question: "Which of the following is not a primitive data type in C#?",
    a: "int",
    b: "string",
    c: "float",
    d: "char",
    correct: "b",
  },
  {
    question: "In C#, which keyword is used to declare a constant?",
    a: "var",
    b: "final",
    c: "const",
    d: "let",
    correct: "c",
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
        alert("You are a C# master!");
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

