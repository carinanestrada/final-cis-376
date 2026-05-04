# UNA Building Matching Game
An interactive web app for matching UNA campus building names to their images, with search and game features.

## Author
Carina Estrada: https://github.com/carinanestrada 

## Narative
This app helps students familiarize themselves with UNA's campus buildings through an interactive matching game and search functionality. This gives them the opportunity to learn where they can find their classes and have a better understand of campus! I chose to improve this project because it combines education with fun gameplay. I built it from scratch using HTML, CSS, and JavaScript, focusing on clean code and user experience. The development involved structuring data, implementing game logic, and ensuring responsive design. As a student at UNA, I want to be familiar with the academic buildings, so that I can know where my classes are and be more be able to feel confident on campus.

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
├── data/
│   └── buildings.json
├── images/
│   ├── collier-library.png
│   ├── cramer.jpg
│   └── ... other building images
├── pages/
│   ├── about.html
│   └── game.html
├── scripts/
│   ├── about-page.js
│   ├── data.js
│   ├── game-lib.js
│   ├── game-page.js
│   ├── index-page.js
│   └── session-login.js
└── styles/
    └── styles.css
```
Some of the major differences in the final project include an updated user interface, cleaner code, reduced lengthy HTML optimized into JS libraries, and a functional login about page!

## Code Highlight
```javascript
// From scripts/game-lib.js - loads a random question for the matching game
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
```
The function above selects a random building from the fetched JSON data array and sets it as the current answer then it displays its image and generates three incorrect options, it also shuffles all choices, and assigns them to answer the button. It is important because it enables the core quiz part of the functionality, ensuring random questions each time. It works by using array methods for filtering and shuffling, DOM manipulation to update the UI, and relies on the buildings data loaded via a fetch API.

## Validation
Nu Validator Results: https://validator.nu/?doc=https%3A%2F%2Fcarinanestrada.github.io%2Ffinal-cis-376%2F+
WAVE Accessibility: https://wave.webaim.org/report#/https://carinanestrada.github.io/final-cis-376/

## Future Improvements
Sprint 99 would include adding more of UNA's buildings like residence halls, as well as a map function where they could drag and drop names onto buildings! https://github.com/carinanestrada/final-cis-376/milestone/1 

### Links
Github repo link: https://github.com/carinanestrada/final-cis-376
GCP IP: http://34.133.89.179
Bonus: check out my linkedin profile! https://www.linkedin.com/in/carinaestrada
