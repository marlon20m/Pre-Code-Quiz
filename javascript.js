var counter = document.querySelector('#counter');
var timeLeft = document.querySelector('#timer');
var clickAnswer = document.querySelector('#clickAnswer');
var rightAnswer = document.querySelector('#rightAnswer');
var begin = document.querySelector('#beginQuiz');
var clearance = document.querySelector('#clear');
var question = document.querySelector('#question');
var options = document.querySelector('#options');
var c = 76;

var count = 0;
counter.textContent = count;
if (localStorage.getItem('count')) {
  count = localStorage.getItem('count');
  counter.textContent = count;
}
clickAnswer.addEventListener('click', function () {
  counter.textContent = count;

  localStorage.setItem('count', count);
});
rightAnswer.addEventListener('click', function () {
  count++;
  counter.textContent = count;

  localStorage.setItem('count', count);
});

clearance.addEventListener('click', function () {
  counter.innerHTML = '0';
});

function countdownTimer() {
  c = c - 1;
  if (c < 76) {
    timeLeft.innerHTML = c + ' :Timer';
  }
  if (c < 1) {
    window.clearInterval(update);
  }
}

update = setInterval('countdownTimer()', 1000);

let questions = [
  {
    questionz: 'What does DOM stand for?',
    choices: [
      'Definite Object Material',
      'Dominator Of Mystery',
      'Dementor of Misery',
      'Document Object Model',
    ],
    correct: 'Document Object Model',
  },
  {
    questionz:
      'What is the first language that became popular for website coding',
    choices: ['Node.js', 'HTML', 'C++', 'REACT'],
    correct: 'HTML',
  },
  {
    questionz: 'What year was Javascript created?',
    choices: ['2006', '1991', '1995', '1928'],
    correct: '1995',
  },
  {
    questionz: 'What does FullStack Web Development mean?',
    choices: [
      'creating a stack of cards with bootstrap',
      '1991',
      '1995',
      '1928',
    ],
    correct: '1928',
  },
];

const questionLimit = questions.length - 1;
let activeQuestion = 0;

function renderQuestion() {
  let q = questions[activeQuestion];
  question.textContent = q.questionz;
  options.innerHTML = '';
  q.choices.forEach(function (choice, i) {
    var choicebtn = document.createElement('button');
    choicebtn.textContent = i + 1 + '. ' + choice;
    options.appendChild(choicebtn);
    choicebtn.setAttribute('id', 'clickAnswer');
    choice;

    choicebtn.onclick = ansCheck;
  });
}

renderQuestion();

function ansCheck() {
  let q = questions[activeQuestion];
  if (question.textContent === q.correct); {
    count += 10;
    renderScore();
  } else {
    timeLeft -= 10
  }
  if (activeQuestion < questionLimit) {
    activeQuestion++;
    renderQuestion();
  } 
    gameOver();
  }
}

function renderProgress() {
  for (var qIndex = 0; qIndex <= questionLimit; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + '></div>';
  }
}

/*
function setTime(secsLeft) {
  var timerInterval = setInterval(function () {
    secsleft = secsLeft - 1;
    timeLeft.textContent = '' + '  :Time Left';

    if (secsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
setTime();
*/

/*
localStorage.removeItem();

setInterval(function(){console.log(": seconds left"); }25000)




 q.questionz.innerHTML = q.question;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceA;
  choiceC.innerHTML = q.choiceA;
  choiceD.innerHTML = q.choiceA;




start.addEventListener;
*/
