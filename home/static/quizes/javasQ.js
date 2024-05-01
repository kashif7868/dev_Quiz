const quizData = [
    {
      question: "What is JavaScript?",
      a: "JavaScript is a scripting language used to make the website interactive",
      b: "JavaScript is an assembly language used to make the website interactive",
      c: "JavaScript is a compiled language used to make the website interactive",
      d: "None of the mentioned",
      correct: "a",
    },
    {
      question: "Which of the following is correct about JavaScript?",
      a: "JavaScript is Assembly-language JavaScript",
      b: "JavaScript is an Object-Based language",
      c: "JavaScript is an Object-Oriented language",
      d: "JavaScript is a High-level language",
      correct: "b",
    },
    {
      question:
        "Arrays in JavaScript are defined by which of the following statements?",
      a: "It is an ordered list of objects",
      b: "It is an ordered list of string",
      c: "It is an ordered list of functions",
      d: "It is an ordered list of values",
      correct: "d",
    },
    {
      question: "Which of the following is not javascript data types?",
      a: "Null type",
      b: "Undefined type",
      c: "Number type",
      d: "All of the mentioned",
      correct: "d",
    },
    {
      question: "What is the basic difference between JavaScript and Java?",
      a: "Functions are considered as fields",
      b: "Functions are values, and there is no hard distinction between methods and fields",
      c: "Variables are specific",
      d: "There is no difference",
      correct: "b",
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
        alert("You are a JavaScript master!");
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
