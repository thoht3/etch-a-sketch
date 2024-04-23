let div = document.createElement("div");

let gridContainer = document.getElementById("gridContainer");
let gridNumber = prompt("Mày muốn bao nhiêu ô?", 0);
if (gridNumber > 100) {
    gridNumber = prompt("Nhiều quá, tối đa 100 thôi má. Nhập lại nè!");
}

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < gridNumber; i++) {
        for (let j = 0; j < gridNumber; j++) {
            let div = document.createElement("div");
            div.classList.add("grid-item");
            gridContainer.appendChild(div);
            div.addEventListener("mouseover",  (eve) => {
                eve.target.style.backgroundColor = "#ff0000";
            });
            div.addEventListener("mouseleave",  (eve) => {
                eve.target.style.backgroundColor = "blue";
            });
        }
    }
});

