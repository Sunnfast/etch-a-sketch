const gridContainer = document.querySelector("#grid-container");
const grid = document.querySelector('.grid')

window.addEventListener("load", makeDefaultGrid);


const resetB = document.querySelector("#clear-btn")
const resizeB = document.querySelector("#size-btn")

resetB.addEventListener('click', clearGrid)
resizeB.addEventListener('click', selectGridSize)

function pickGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function selectGridSize() {
    let newSize =prompt("Please enter how many rows you would like in your square.")


    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize <1 || newSize > 81 || Number.isNaN(newSize)) {
            alert("Please enter a number from 1-81.")
            selectGridSize()
        } else {
            clearGrid();
            pickGridSize(newSize);
            fillGrid(newSize);
        }
    }
}

function makeDefaultGrid() {
    pickGridSize(16);
    fillGrid(16);
    
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList = "grid-element";
      gridElement.addEventListener("mouseover", randomColor);
      gridContainer.appendChild(gridElement);
    }
  }

function randomColor(e) {
const randomR = Math.floor(Math.random() * 256);
const randomG = Math.floor(Math.random() * 256);
const randomB = Math.floor(Math.random() * 256);
e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}


function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
        
    });
    fillGrid(16);
}


