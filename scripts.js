const gridContainer = document.querySelector('.grid-container');


makeGrid = () => {
  for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = 'black';
    })
    gridContainer.appendChild(div);
  }
};

function randomColor() {
  let randomRed = Math.floor(Math.random() * 256);
  let randomGreen = Math.floor(Math.random() * 256);
  let randomBlue = Math.floor(Math.random() * 256);
  return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

function removeAllChildNodes(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
};

const slider = document.querySelector('#slider')
const gridValue = document.querySelector('.value');
slider.addEventListener('input', function(){
  let newValue = document.getElementById('slider').value;
  gridValue.textContent = newValue;
  removeAllChildNodes(gridContainer);
  gridContainer.setAttribute('style', `grid-template-columns: repeat(${newValue}, 2fr); grid-template-rows: repeat(${newValue}, 2fr);`)
  for (let i = 0; i < newValue * newValue; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = 'black';
    })
    gridContainer.appendChild(div);
  }
});

const clearGrid = document.querySelector('#clear');
clearGrid.addEventListener('click', function(){
  let sliderAmount = document.getElementById('slider').value;
  let cell = gridContainer.children;
  for (let i = 0; i < sliderAmount*sliderAmount; i++) {
    cell[i].style.backgroundColor = 'rgba(248, 248, 210, 0.952)';
  }
});

const rainbowPen = document.querySelector('#rainbow');
rainbowPen.addEventListener('click', function(){
  let newValue = document.getElementById('slider').value;
  let cell = gridContainer.children;
  for (let i=0; i < newValue*newValue; i++) {
    cell[i].addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = randomColor();
    })
  }
});

const defaultPen = document.querySelector('#default');
defaultPen.addEventListener('click', function(){
  let newValue = document.getElementById('slider').value;
  let cell = gridContainer.children;
  for (let i=0; i < newValue*newValue; i++) {
    cell[i].addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = 'black';
    })
  }
});


makeGrid();