const quizData = [

  {
    question: "Who developed the Ruby programming language?",
    a: "Yukihiro Matsumoto",
    b: "Guido van Rossum",
    c: "Matz Ross",
    d: "Larry Wall",
    correct: "a",
  },
  {
    question: "What year was the Ruby programming language first released?",
    a: "1995",
    b: "2000",
    c: "1991",
    d: "2005",
    correct: "c",
  },
  {
    question: "Which of the following is NOT a Ruby data type?",
    a: "Symbol",
    b: "Hash",
    c: "List",
    d: "String",
    correct: "c",
  },
  {
    question: "What is the convention for naming Ruby files?",
    a: ".ruby",
    b: ".r",
    c: ".rb",
    d: ".rubyfile",
    correct: "c",
  },
  {
    question: "What is the primary purpose of the RubyGem tool?",
    a: "Dependency management",
    b: "Code formatting",
    c: "Debugging",
    d: "Performance optimization",
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
        alert("You are a Ruby master!");
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
