// Array of quiz questions and their corresponding answers
const questions = [
  {
    question: "What does HTML stand for?", 
    options: [ 
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Markup Language",
      "High-Level Machine Language"
    ],
    correct: 0 // The correct answer is the first option
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    correct: 1 // The correct answer is "CSS"
  },
  {
    question: "Which is not a programming language?",
    options: ["Python", "JavaScript", "HTML", "C++"],
    correct: 2 // The correct answer is "HTML"
  },
  {
    question: "Which HTML tag is used to define an internal stylesheet?",
    options: ["<style>", "<script>", "<css>", "<link>"],
    correct: 0 // The correct answer is "<style>"
  },
  {
    question: "Which symbol is used to select an ID in CSS?",
    options: [".", "#", "!", "$"],
    correct: 1 // The correct answer is "#"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Apple", "Netscape", "Google"],
    correct: 2 // The correct answer is "Netscape"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correct: 0 // The correct answer is "Cascading Style Sheets"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<nav>"],
    correct: 1 // The correct answer is "<a>"
  },
  {
    question: "Which method is used to log messages in JavaScript?",
    options: ["console.log()", "print()", "log()", "output()"],
    correct: 0 // The correct answer is "console.log()"
  },
  {
    question: "Which protocol is used to secure data in web communication?",
    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
    correct: 1 // The correct answer is "HTTPS"
  }
];

// Variables to track the current question, score, and timer
let currentQuestion = 0;
let score = 0;
let timer;

// DOM elements for displaying quiz content
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('answer-options');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const scoreArea = document.getElementById('score-area');
const scoreDisplay = document.getElementById('score');
const feedback = document.getElementById('feedback');
//function to shuffle the elements questions or options
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); //random index
    [array[i], array[j]] = [array[j], array[i]]; //swap elements
  }
}

//funtion to load the current question and options into the DOM
function loadQuestion() {
  resetTimer(); //reset timer for a new question
  const q = questions[currentQuestion]; //get current question object
  questionEl.textContent = q.question; // set question text
  optionsEl.innerHTML = ''; // clear previous options

  //create list itdms for each answer option
  q.options.forEach((option, index) => {
    const li = document.createElement('li'); // create a new list
    li.textContent = option; //set options
    li.dataset.index = index; //store index as a data attribute
    optionsEl.appendChild(li); //add list item to the options element
  });

  startTimer(); // start time for current question
}

//funtion to check user's selected answer
function checkAnswer(selected) {
  const correctIndex = questions[currentQuestion].correct;
  if (parseInt(selected) === correctIndex) {
    score++;
  }
}

//function to display the user's  final score 
function showResults() {
  scoreArea.classList.remove('hidden');
  scoreDisplay.textContent = `${score} / ${questions.length}`;
  feedback.textContent = score >= 8 ? "Excellent work!" : score >= 5 ? "Good job!" : "Keep practicing!";
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById('timer').textContent = "15";
}

function startTimer() {
  let timeLeft = 15;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      submitBtn.disabled = true;
      nextBtn.disabled = false;
    }
  }, 1000);
}

//event listener for selecting an answer option
optionsEl.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const selected = e.target.dataset.index;
    checkAnswer(selected);
    submitBtn.disabled = false;
  }
});

//event listener for submit buttton
submitBtn.addEventListener('click', () => {
  submitBtn.disabled = true;
  nextBtn.disabled = false;

  if (currentQuestion === questions.length - 1) {
    clearInterval(timer);
    showResults();
  }
});

 // event listener for the next button
nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    nextBtn.disabled = true;
  }
});

// Initialize quiz
shuffleArray(questions);
loadQuestion();
