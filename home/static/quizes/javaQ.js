const quizData = [
  {
    question: "Who invented Java Programming?",
    a: "Guido van Rossum",
    b: "James Gosling",
    c: "Dennis Ritchie",
    d: "Bjarne Stroustrup",
    correct: "b",
  },
  {
    question: "Which statement is true about Java?",
    a: "Java is a sequence-dependent programming language",
    b: "Java is a code dependent programming language",
    c: "Java is a platform-dependent programming language",
    d: "Java is a platform-independent programming language",
    correct: "d",
  },
  {
    question:
      "Which component is used to compile, debug and execute the java programs?",
    a: "JRE",
    b: "JIT",
    c: "JDK",
    d: "JVM",
    correct: "c",
  },
  {
    question: "Which of these cannot be used for a variable name in Java?",
    a: "identifier & keyword",
    b: "identifier",
    c: "keyword",
    d: "none of the mentioned",
    correct: "c",
  },
  {
    question: "Which of these cannot be used for a variable name in Java?",
    a: "identifier & keyword",
    b: "identifier",
    c: "keyword",
    d: "none of the mentioned",
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
      let message = "";
      if (score === quizData.length) {
        // If all questions are answered correctly
        message = "Congratulations! You answered all questions correctly!";
        alert("You are a Java master!");
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
