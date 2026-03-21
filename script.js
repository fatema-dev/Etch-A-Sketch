let input = prompt("Enter the size of the grid (1-64): ");
const grid = document.querySelector(".grid");

let size = Number(input);

if (size > 64 || size < 1) {
	const error = document.createElement("div");
	error.textContent =
		"Cannot display grid, pixel size not supported, please try again.";
    error.classList.add("error");
	grid.appendChild(error);
} else {
	generateGrid(size);
}

function generateGrid(size) {
    grid.innerHTML='';
    let pxSize = 946/(size);
    for(let row = 1; row <= size; row++){
      for (let column=1; column<=size; column++){
        const pixel = document.createElement('div');
        pixel.classList.add('px');
        // set the width and height of the pixels
        pixel.style.width = `${pxSize}px`;
        pixel.style.height = `${pxSize}px`;
        grid.appendChild(pixel);
      }
    }
}
