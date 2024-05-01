const quizData = [
    {
      question: "Who invented C++?",
      a: "Dennis Ritchie",
      b: "Ken Thompson",
      c: "Brian Kernighan",
      d: "Bjarne Stroustrup",
      correct: "d",
    },
    {
      question: "What is C++?",
      a: "C++ is an object oriented programming language.",
      b: "C++ is a procedural programming language",
      c: "C++ supports both procedural and object oriented programming language",
      d: "C++ is a functional programming language",
      correct: "c",
    },
    {
      question: "Which of the following is used for comments in C++?",
      a: "/* comment */",
      b: " // comment */",
      c: " // comment",
      d: "both // comment or /* comment */",
      correct: "d",
    },
    {
      question:
        "Which of the following user-defined header file extension used in c++?",
      a: "hg",
      b: "cpp",
      c: "h",
      d: "hf",
      correct: "b",
    },
    {
      question: "Which is more effective while calling the C++ functions?",
      a: "call by object",
      b: "call by pointer",
      c: "call by value",
      d: "call by reference",
      correct: "d",
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
        alert("You are a C++ master!");
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

