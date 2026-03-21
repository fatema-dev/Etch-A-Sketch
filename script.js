let input = prompt("Enter the size of the grid (1-100): ");
const grid = document.querySelector(".grid");

let size = Number(input);

if (size > 100 || size < 1) {
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
    let pxSize = 646/size;
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
