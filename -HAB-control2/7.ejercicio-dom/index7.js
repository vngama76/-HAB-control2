const body = document.querySelector('body');

body.innerHTML = `
    <button class='button'>Añadir cuadrado</button>
    <div class='grid'>
        <div class='square'></div>             
        <div class='square'></div>             
        <div class='square'></div>             
        <div class='square'></div>             
    </div>
`;
const button = document.querySelector('.button');
const grid = document.querySelector('.grid');
const squares = document.querySelectorAll('.square');

grid.style = `
    margin: 0 auto 0 auto;
    width: 750px;
    min-height: 750px;
    display: grid;    
    grid-template-columns: auto auto auto auto ;
    grid-template-rows: auto auto auto auto;
`;

button.style = `
    margin: 10vh auto auto auto;
    width: 750px;
    font-size: 3rem; 
    display: block; 
    background-color: #ffb6c1;
    border-radius: 20px; 
`;

function randomColors() {
  const r = Math.floor(Math.random() * 250 + 1);
  const g = Math.floor(Math.random() * 250 + 1);
  const b = Math.floor(Math.random() * 250 + 1);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeColors(squares) {
  for (const sq of squares) {
    sq.style = `
        background-color: ${randomColors()};
        border-radius: 10px;
        `;
  }
}

const addSquare = (a) => {
  const { target } = a;
  if (target.matches('.button')) {
    const addDiv = document.createElement('div');
    addDiv.classList.add('square');
    grid.append(addDiv);
  }
};
button.addEventListener('click', addSquare);

setInterval(function () {
  const selSquares = grid.querySelectorAll('.square');
  changeColors(selSquares);
}, 1000);
