const container = document.getElementById("container");

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


gridCreator(20);

const grid = document.querySelectorAll("div.block");
grid.forEach((block) => {
    block.addEventListener("mouseenter", () => {
        block.style.backgroundColor = "black";
    })
} )