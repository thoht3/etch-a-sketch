let div = document.createElement("div");

let gridContainer = document.getElementById("gridContainer");

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let div = document.createElement("div");
            div.classList.add("grid-item");
            gridContainer.appendChild(div);
        }
    }
});