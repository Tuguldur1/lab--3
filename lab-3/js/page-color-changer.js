const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");
const body = document.body;

// Function to update
function updateBackgroundColor() {
    // Get the values from the sliders
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Add event listeners to each slider to call the update function on input change
redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);

//background color on page load
updateBackgroundColor();
