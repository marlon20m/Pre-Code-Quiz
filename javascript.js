var counter = document.querySelector('#counter');
var timeLeft = document.querySelector('#timer');
var clickAnswer = document.querySelector('#clickAnswer');
var rightAnswer = document.querySelector('#rightAnswer');
var begin = document.querySelector('#beginQuiz');
var clearance = document.querySelector('#clear');
var question = document.querySelector('#question');
var options = document.querySelector('#options');
var choicebtn = document.createElement('button');
var c = 76;

var count = 0;
counter.textContent = count;
if (localStorage.getItem('count')) {
  count = localStorage.getItem('count');
  counter.textContent = count;
}
// clickAnswer.addEventListener('click', function () {
//   counter.textContent = count;

//   localStorage.setItem('count', count);
// }); options.addEventListener('click', function () {
//   count++;
//   counter.textContent = count;

//   localStorage.setItem('count', count);
// });

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

var questions = [
  {
    id: 0,
    questionz: ['What does DOM stand for?'],
    choices: [
      'Definite Object Material',
      'Dominator Of Mystery',
      'Dementor of Misery',
      'Document Object Model',
    ],
    correct: 'Document Object Model',
  },
  {
    id: 1,
    questionz: [
      'What is the first language that became popular for website coding',
    ],
    choices: ['Node.js', 'HTML', 'C++', 'REACT'],
    correct: 'HTML',
  },
  {
    id: 2,
    questionz: ['What year was Javascript created?'],
    choices: ['2006', '1991', '1995', '1928'],
    correct: '1995',
  },
  {
    id: 3,
    questionz: ['What does FullStack Web Development mean?'],
    choices: [
      'creating a stack of cards with bootstrap',
      '1991',
      '1995',
      '1928',
    ],
    correct: '1928',
  },
];
/*
var obj = {
  questionz: 'What does DOM stand for?',
  questionz:
    'What is the first language that became popular for website coding',
  questionz: 'What year was Javascript created?',
  questionz: 'What does FullStack Web Development mean?',
};
var arr = object.keys(obj);

console.log(arr);

var arrObj = arr.map(function (key) {
  return { [key]: obj[key] };
});

console.log(arrObj);
*/

var questionLimit = questions.length - 1;
var activeQuestion = 0;

function renderQuestion() {
  var activeQuestion = 0;
  q = questions[activeQuestion];
  question.textContent = q.questionz;
  options.innerHTML = '';
  q.choices.forEach(function (choice, i) {
    var choicebtn = document.createElement('button');
    choicebtn.textContent = i + 1 + '. ' + choice;
    options.appendChild(choicebtn);
    choicebtn.setAttribute('id', 'clickAnswer');
    choice;
    choicebtn.onclick = nextQ();
  });
}
renderQuestion();

function nextQ() {
  var currentQuestion = [''];
  k = questions[currentQuestion];
  options.innerHTML = '';
  selection = questions.correct;
  if ((selection = questions[currentQuestion].correct)) {
    count++;
  } else {
    count--;
  }
  if ((selection = k.correct)) {
    questions[0]++;
  }
}

nextQ();
/*
    let q = questions[activeQuestion];
    if (question.textContent === q.correct) {
      count += 10;
      renderScore();
    } else {
      timeLeft -= 10;
    }
  }
  ansCheck();
  gameOver();
  if (activeQuestion < questionLimit) {
    activeQuestion++;
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





  choicebtn.onclick = nextQ();



start.addEventListener;
*/
