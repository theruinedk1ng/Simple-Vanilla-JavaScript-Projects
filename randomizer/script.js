const backgroundColour = document.getElementById("colourBtn");
const colorDisplay = document.getElementById("colourCode");


document.getElementById("colourBtn").addEventListener("click", () => {
    let randomColour = getRandomRGB();
    document.body.style.backgroundColor = randomColour;
    colorDisplay.textContent = `Background Color: ${randomColour}`;
});

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}