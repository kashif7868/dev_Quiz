const quizData = [
    {
      question: "What year was the Swift programming language first introduced by Apple?",
      a: "2010",
      b: "2012",
      c: "2014",
      d: "2016",
      correct: "c",
    },
    {
      question: "Who is the primary developer of the Swift programming language?",
      a: "Chris Lattner",
      b: "Guido van Rossum",
      c: "Brendan Eich",
      d: "Anders Hejlsberg",
      correct: "a",
    },
    {
      question: "What is the primary operating system targeted by Swift?",
      a: "Windows",
      b: "Linux",
      c: "macOS",
      d: "Android",
      correct: "c",
    },
    {
      question: "What keyword is used to declare a constant in Swift?",
      a: "let",
      b: "const",
      c: "var",
      d: "final",
      correct: "a",
    },
    {
      question: "Which Swift feature provides type safety and eliminates the need for manual memory management?",
      a: "Optionals",
      b: "Automatic Reference Counting (ARC)",
      c: "Generics",
      d: "Structs",
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
          alert("You are a Swift master!");
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
  
