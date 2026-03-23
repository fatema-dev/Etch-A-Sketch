const grid = document.querySelector(".grid");
let size = 0;
let input = "";

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
blackPen.addEventListener("click", () => {
	const pixels = document.querySelectorAll(".px");
	pixels.forEach((pixel) => {
        let hovercount = 0;
		pixel.addEventListener("mouseenter", () => {
            hovercount++;
            if(hovercount < 10){
                pixel.style.backgroundColor = "black";
                pixel.style.opacity= `0.${hovercount}`;
            }else{
                pixel.style.opacity= 1;
            }
		});
	});
});

const rainbowPen = document.getElementById("rainbow");
rainbow.addEventListener("click", () => {
	const pixels = document.querySelectorAll(".px");
	pixels.forEach((pixel) => {
		pixel.addEventListener("mouseover", () => {
			let max = 256;
			let r = Math.floor(Math.random() * max); //random number from 1 to 255
			let g = Math.floor(Math.random() * max);
			let b = Math.floor(Math.random() * max);
			pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
		});
	});
});

const resetGrid = document.getElementById("reset-btn");
resetGrid.addEventListener("click", () => {
	const pixels = document.querySelectorAll(".px");
	pixels.forEach((pixel) => {
		pixel.style.backgroundColor = "white";
        pixel.style.opacity = 1;
	});
});

