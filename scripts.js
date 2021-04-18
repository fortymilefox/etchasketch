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

const slider = document.querySelector('#slider')
const gridValue = document.querySelector('.value');
slider.addEventListener('input', function(){
  let newValue = document.getElementById('slider').value;
  gridValue.textContent = newValue;
  removeAllChildNodes(gridContainer);
  gridContainer.setAttribute('style', `grid-template-colums: repeat(${newValue}, 2fr); grid-template-rows: repeat(${newValue}, 2fr);`)
  for (let i = 0; i < newValue * newValue; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
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

makeGrid();