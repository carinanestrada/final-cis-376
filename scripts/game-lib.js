const locations = [
 {name:"Collier Library", img:"../images/collier-library.png"},
 {name:"601 Cramer Way", img:"../images/cramer.jpg"},
 {name:"Communication Building", img:"../images/communication-building.png"},
 {name:"Math and Computing", img:"../images/math-and-computing.png"},
 {name:"East Campus", img:"../images/east-campus.png"},
 {name:"Theatre", img:"../images/theatre.png"},
 {name:"Keller Hall", img:"../images/keller.png"},
 {name:"Kilby School", img:"../images/kilby.png"},
 {name:"Laura M. Harrison Hall and Anderson College of Nursing", img:"../images/nursing.png"},
 {name:"McKinney Center", img:"../images/mckinney-center.png"},
 {name:"Mitchell Burford Science and Technology", img:"../images/science-and-technology.png"},
 {name:"Music Building", img:"../images/music.png"},
 {name:"Norton Auditorium", img:"../images/norton.png"},
 {name:"Planetarium and Observatory", img:"../images/planetarium.png"},
 {name:"Powers Hall", img:"../images/powers.png"},
 {name:"Stone Lodge", img:"../images/stone-lodge.png"},
 {name:"Student Publications", img:"../images/publications.png"},
 {name:"Visual Arts Building", img:"../images/arts.png"},
 {name:"Willingham Hall", img:"../images/willingham.png"},
 {name:"Wesleyan Hall", img:"../images/wesleyan.png"}
];

let currentAnswer;

function shuffle(array){
 return array.sort(()=>Math.random()-0.5);
}

function loadQuestion() {
  console.log('Loading new question');
  const current = locations[Math.floor(Math.random() * locations.length)];
  currentAnswer = current.name;
  document.getElementById('quizImage').src = current.img;

  const wrong = shuffle(locations.filter(l => l.name !== current.name)).slice(0, 2).map(l => l.name);
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

loadQuestion(); 