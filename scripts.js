const gridContainer = document.querySelector("#grid-container");

window.addEventListener("load", loadGrid);

function loadGrid() {
  setGrid(16);
  addSquares(16);
}

function setGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function addSquares(size) {
  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList = "grid-square";
    gridContainer.appendChild(gridSquare);
  }
}
//  addSquares();