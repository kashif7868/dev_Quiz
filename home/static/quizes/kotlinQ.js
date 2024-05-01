const quizData = [

    {
      question: "Who is the creator of the Kotlin programming language?",
      a: "JetBrains",
      b: "Google",
      c: "Microsoft",
      d: "Apple",
      correct: "a",
    },
    {
      question: "In which year was Kotlin first released?",
      a: "2010",
      b: "2011",
      c: "2012",
      d: "2013",
      correct: "b",
    },
    {
      question: "Which of the following is NOT a feature of Kotlin?",
      a: "Null Safety",
      b: "Coroutines",
      c: "Generics",
      d: "Pointers",
      correct: "d",
    },
    {
      question: "What is the preferred build tool for Kotlin projects?",
      a: "Maven",
      b: "Ant",
      c: "Gradle",
      d: "Make",
      correct: "c",
    },
    {
      question: "Which platform is officially supported for Kotlin development?",
      a: "Android",
      b: "iOS",
      c: "Windows",
      d: "Linux",
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
          alert("You are a Kotlin master!");
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
  