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
