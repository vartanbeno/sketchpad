let container = document.querySelector("#container");
let height = 480;
let width = height;
container.style.height = `${height}px`;
container.style.width = `${width}px`;
let numberOfSquares;
let colourful = document.querySelector("input");

function fillSquares(numberOfSquares) {
    checkForChildren();
    let divHeight = height/numberOfSquares;
    createDiv(divHeight, numberOfSquares);
    if (colourful.checked) {
        randomColours();
    }
    else {
        onlyBlack();
    }
}

function createDiv(divHeight, numberOfSquares) {
    for (i = 0; i < numberOfSquares; i++) {
        for (j = 0; j < numberOfSquares; j++) {
            let num = Math.random() * 10;
            let div = document.createElement("div");
            div.setAttribute("style", `height: ${divHeight}px; width: ${divHeight}px; background-color: inherit; border: 1px solid black; box-sizing: border-box;`);
            container.appendChild(div);
        }
    }
}

function randomColours() {
    let divs = document.querySelectorAll("#container div");
    divs.forEach(div => {
        div.addEventListener("mouseover", function() {
        let r = Math.floor((Math.random() * 256));      // random integer between 0 and 255
        let g = Math.floor((Math.random() * 256));
        let b = Math.floor((Math.random() * 256));
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    });
}

function onlyBlack() {
    let divs = document.querySelectorAll("#container div");
    divs.forEach(div => {
        div.addEventListener("mouseover", function() {
        div.style.backgroundColor = "black";
        })
    });
}

function checkForChildren() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function resetGrid() {
    let divs = document.querySelectorAll("#container div");
    divs.forEach(div => {
        div.style.backgroundColor = "inherit";
    });
}

let fillDiv = document.querySelector("#prompt");
fillDiv.addEventListener("click", function() {
    numberOfSquares = prompt("How many squares per side on the grid?");
    if (!numberOfSquares) return;
    fillSquares(numberOfSquares);
})

let reset = document.querySelector("#reset");
reset.addEventListener("click", resetGrid);

window.addEventListener("keydown", (e) => {
    if (e.keyCode == "67") {
        numberOfSquares = prompt("How many squares per side on the grid?");
        if (!numberOfSquares) return;
        fillSquares(numberOfSquares);
    }
    else if (e.keyCode == "82") {
        resetGrid();
    }
    else {
        return;
    }
});

colourful.addEventListener("click", function() {
    (colourful.checked) ? randomColours() : onlyBlack();
})