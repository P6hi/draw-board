const container = document.getElementById("container");
const colourPicker = document.getElementById("colourpick");

let userColour = colourPicker.value;
colourPicker.addEventListener("input", (e) => {
    userColour = e.target.value;
    gridDraw(userColour);
});

function gridCreator(gridNumber) {
    for (i = 0; i < gridNumber; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

        for (j = 0; j < gridNumber; j++) {
            const block = document.createElement("div");
            block.classList.add("block");
            row.appendChild(block);
        }
}
}

function gridDraw(colour) {
    const grid = document.querySelectorAll("div.block");
    grid.forEach((block) => {
        block.addEventListener("mousedown", () => {
            block.style.backgroundColor = colour;
        })
        block.addEventListener("mouseover", (e) => {
            if (e.buttons === 1) {
            block.style.backgroundColor = colour;
        }
    })
});
}

function gridReset() {
    const grid = document.querySelectorAll("div.block");
    grid.forEach((block) => {
      block.style.backgroundColor = "white";
});
}

gridCreator(16);
gridDraw(userColour);



const gridCreation = document.getElementById("gridCreation");
gridCreation.addEventListener("click", () => {
    let gridNumber = prompt('Choose grid size from 1 to 100.', '');
    if (gridNumber <= 100 && gridNumber >= 1 && gridNumber !== false) {
    container.textContent = '';
    gridCreator(gridNumber);
} else {
    alert('Invalid choice. Please choose a number from 1 to 100.');
}
    gridDraw(userColour);
})

const gridEraser = document.getElementById("erase");
gridEraser.addEventListener("click", () => {
    gridDraw("white");
});

const gridDrawer = document.getElementById("draw");
gridDrawer.addEventListener("click", () => {
    gridDraw(userColour);
});

const gridReseter = document.getElementById("reset");
gridReseter.addEventListener("click", () => {
    gridReset();
});
