const container = document.querySelector('#container');
const gridWidth = 625;
container.style.width = gridWidth + 'px';

const updateButton = document.querySelector('#update-button');
updateButton.addEventListener('click', refreshGrid);

createGrid();
draw();

function createGrid(gridSize=document.querySelector('#grid-size').value) {
  const numSquares = gridSize ** 2;
  const squareSize =  gridWidth / gridSize + 'px';

  for (i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('hover');  
    square.style.width = squareSize;
    square.style.height = squareSize;
    container.appendChild(square);
  }
}

function refreshGrid() {
  container.textContent = ''
  createGrid(document.querySelector('#grid-size').value);
  draw();
}

function draw() {
  const hover = document.querySelectorAll('.hover')
  hover.forEach((x) => {
    x.addEventListener('mouseover', function() {
      x.style.backgroundColor = 'black';
    })
  });
}