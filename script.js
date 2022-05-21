const container = document.getElementById("container");

for (i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

        for (j = 0; j < 16; j++) {
            const block = document.createElement("div");
            block.classList.add("block");
            row.appendChild(block);
        }
}