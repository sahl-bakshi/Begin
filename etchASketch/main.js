// constants 
const defaultSize = 16;
const container = document.querySelector(".container");

// start page
window.addEventListener("load", function() {
    newGrid(defaultSize);
});

// 1 buttons 

const changeGrid = document.querySelector('.newGrid');
changeGrid.addEventListener("click", changeSize);

const reset = document.querySelector(".reset");
reset.addEventListener("click", clear);

const rgb = document.querySelector(".rgb");
rgb.addEventListener("click", function() {
    change(rGB);
})

const black = document.querySelector(".black");
black.addEventListener("click", function() {
    change(blackColour);
})

// 2

function newGrid(size) {
    for (let i = 0; i < size * size; ++i) {
        let cell = document.createElement("div");
        container.append(cell);
        cell.classList.add("cell");
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

// 3

function blackColour() {
    return "black";
}

// 4

function rGB() {
    let hexa = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 5

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// 6

function changeSize() {
    let input = prompt("Please enter a number between 2 and 64");

    if (input != null) {
        if (!isNaN(input) && input >= 2 && input <= 64) {
            removeAllChildNodes(container);
            newGrid(input);
        } else {
            changeSize();
        }
    } else {
        return;
    }
}

// 7

function clear() {
    let cell = container.children;
    let count = container.children.length;
    for (let i = 0; i < count; ++i) {
        cell[i].style.backgroundColor = "white";
    }
}

// 8

function change(func) {
    let cell = container.children;
    let count = container.children.length;
    for (let i = 0; i < count; ++i) {
        cell[i].addEventListener("mouseover", function() {
            cell[i].style.backgroundColor = func();
        })
    }
}