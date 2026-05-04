# UNA Building Matching Game

> An interactive web app for matching UNA campus building names to their images, with search and game features.

https://github.com/carinanestrada/final-cis-376

This app helps users familiarize themselves with UNA's campus buildings through an interactive matching game and search functionality. I chose to improve this project because it combines education with fun gameplay. I built it from scratch using HTML, CSS, and JavaScript, focusing on clean code and user experience. The development involved structuring data, implementing game logic, and ensuring responsive design.

## Attribution
- Libraries: Bootstrap, Normalize.css
- Tutorials: MDN Web Docs, W3Schools
- Code sources: Bootstrap documentation
- AI usage: GitHub Copilot for code suggestions and project structure image
- Icons/Images: UNA campus photos (public domain)

## Project Structure
```
.
├── index.html
├── README.md
├── images/
│   ├── collier-library.png
│   ├── cramer.jpg
│   └── ... (other building images)
├── pages/
│   ├── about.html
│   └── game.html
├── scripts/
│   ├── data.js
│   ├── game-lib.js
│   ├── search-logic.js
│   ├── search.js
│   └── session-login.js
└── styles/
    └── styles.css
```

## Code Highlight
```javascript
// From scripts/game-lib.js - loads a random question for the matching game
function loadQuestion() {
  const randomIndex = Math.floor(Math.random() * buildings.length);
  const building = buildings[randomIndex];
  document.getElementById('quizImage').src = `../images/${building.image}`;
  // Sets up answer buttons with correct and incorrect options
}
```
This function selects a random building from the data array, displays its image, and prepares multiple-choice answers. It's key for the game's interactivity and ensures each question is unique.

## Validation
Nu Validator Results: https://validator.w3.org/nu/?doc=https%3A%2F%2Fcarinanestrada.github.io%2Funa-building-matching-game%2F
WAVE Accessibility: https://wave.webaim.org/report#/https://carinanestrada.github.io/una-building-matching-game/

### Links
Github repo link: https://github.com/carinanestrada/final-cis-376 
Bonus: check out my linkedin profile! www.linkedin.com/in/carinaestrada 