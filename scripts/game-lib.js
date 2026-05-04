import { buildings, loadBuildings } from './data.js';

let currentAnswer;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

async function initGame() {
  await loadBuildings();
  loadQuestion();
}

function loadQuestion() {
  console.log('Loading new question');
  const current = buildings[Math.floor(Math.random() * buildings.length)];
  currentAnswer = current.name;
  document.getElementById('quizImage').src = `../images/${current.image}`;

  const wrong = shuffle(buildings.filter(l => l.name !== current.name)).slice(0, 2).map(l => l.name);
  const choices = shuffle([current.name, ...wrong]);

  const buttons = document.querySelectorAll('.answer');
  buttons.forEach((btn, i) => {
    btn.textContent = choices[i];
  });

  document.getElementById('result').textContent = '';
}

function checkAnswer(choice) {
  console.log('Answer selected:', choice);
  const result = document.getElementById('result');
  if (choice === currentAnswer) {
    result.textContent = 'Correct!';
    result.style.color = 'green';
    console.log('Correct answer');
  } else {
    result.textContent = 'Incorrect! Correct answer: ' + currentAnswer;
    result.style.color = 'red';
    console.log('Incorrect answer');
  }
}

export { initGame, loadQuestion, checkAnswer }; 