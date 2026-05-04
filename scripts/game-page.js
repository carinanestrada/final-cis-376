import { initGame, loadQuestion, checkAnswer } from './game-lib.js';

document.addEventListener('DOMContentLoaded', function() {
  console.log('Game page loaded');
  initGame();
  document.getElementById('nextBtn').addEventListener('click', loadQuestion);
  document.querySelectorAll('.answer').forEach(function(btn) {
    btn.addEventListener('click', function() {
      checkAnswer(btn.textContent);
    });
  });
});