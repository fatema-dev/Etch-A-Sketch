# Etch-A-Sketch

A browser-based recreation of the classic Etch-A-Sketch toy, built with vanilla HTML, CSS, and JavaScript. Draw on a dynamically generated grid by hovering over each square, with options to reset, resize, and switch between black and rainbow drawing modes.

**Live demo:** https://fatema-dev.github.io/Etch-A-Sketch/

## Features

- 🎨 **Draw on hover** — move your cursor over the grid to "sketch," just like the real toy
- ❌ **Reset** — clears the grid back to blank instantly
- 🔄️ **Resize** — change the grid dimensions on the fly to draw at different resolutions
- ⚫ **Black mode** — squares progressively darken with repeated hovers, mimicking a real pencil-shading effect
- 🎨 **Rainbow mode** — each square gets a random color as you draw over it

## Tech Stack

- **HTML** — grid structure and layout
- **CSS** — styling and grid presentation
- **JavaScript (vanilla)** — dynamic grid generation, event handling, and color logic

## How It Works

The grid is generated dynamically in JavaScript, rather than hardcoding a fixed number of squares in HTML, the script creates `div` elements and appends them to the container based on the selected grid size. Each square listens for a `mouseenter` event, which triggers a color/opacity change depending on the active mode: a randomly generated RGB value for rainbow mode, or a progressive darkening (increasing opacity/reducing lightness on each hover) for black mode.

## Running Locally

```bash
git clone https://github.com/fatema-dev/Etch-A-Sketch.git
cd Etch-A-Sketch
```

Then just open `index.html` in your browser, no build step or dependencies required.

## What I Learned

- Dynamically generating and manipulating DOM elements with JavaScript instead of static HTML
- Handling mouse events (`mouseover`) to create interactive, real-time visual feedback
- Generating random colors programmatically for the rainbow mode
- Structuring vanilla JS state (grid size, active drawing mode) without a framework

## Future Improvements

- Add a color picker for custom draw colors beyond black/rainbow
- Add touch support for mobile drawing
- Add a save/export-as-image feature

## License

This project is open-source and available under the [MIT License](LICENSE).

---

_Developed by fatema-dev_
