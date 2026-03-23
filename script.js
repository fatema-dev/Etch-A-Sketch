const grid = document.querySelector(".grid");
let size = 0;
let input = "";
let mode = "none";

function generateGrid(size) {
	grid.innerHTML = "";
	let pxSize = 646 / size;
	for (let row = 1; row <= size; row++) {
		for (let column = 1; column <= size; column++) {
			const pixel = document.createElement("div");
			pixel.classList.add("px");
			// set the width and height of the pixels
			pixel.style.width = `${pxSize}px`;
			pixel.style.height = `${pxSize}px`;
			grid.appendChild(pixel);

			pixel.dataset.hovercount = 0;
			pixel.addEventListener("mouseenter", () => {
				let count = Number(pixel.dataset.hovercount);
				if (mode == "black") {
					pixel.style.backgroundColor = "black";
					if (count < 10) {
						count++;
						pixel.style.opacity = count / 10;
						pixel.dataset.hovercount = count;
					}
				} else if (mode == "rainbow") {
					let max = 256;
					let r = Math.floor(Math.random() * max);
					let g = Math.floor(Math.random() * max);
					let b = Math.floor(Math.random() * max);
					pixel.style.opacity = 1;
					pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
				}
			});
		}
	}
}

//default grid size
generateGrid(16);

const resizeGrid = document.getElementById("resize-btn");
resizeGrid.addEventListener("click", () => {
	input = prompt("Enter the size of the grid (1-100): ");
	size = Number(input);

	if (size > 100 || size < 1) {
		const error = document.createElement("div");
		error.textContent =
			"Cannot display grid, pixel size not supported, please try again.";
		error.classList.add("error");
		grid.appendChild(error);
	} else {
		generateGrid(size);
	}
});

const blackPen = document.getElementById("black-pen");
blackPen.addEventListener("click", () => (mode = "black"));

const rainbowPen = document.getElementById("rainbow");
rainbowPen.addEventListener("click", () => (mode = "rainbow"));

const resetGrid = document.getElementById("reset-btn");
resetGrid.addEventListener("click", () => {
	const pixels = document.querySelectorAll(".px");
	grid.classList.add("shake");
	pixels.forEach((pixel) => {
		pixel.dataset.hovercount = 0;
		pixel.style.backgroundColor = "white";
		pixel.style.opacity = 1;
	});
    container.setTimeout(() => {
        grid.classList.remove("shake");
    }, 500);
});
