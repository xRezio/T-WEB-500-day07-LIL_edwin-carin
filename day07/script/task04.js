// task04.js

// nth child = enfants
const increaseButton = document.querySelector('button:nth-child(1)');
const decreaseButton = document.querySelector('button:nth-child(2)');
const backgroundColorSelect = document.querySelector('select');

let currentFontSize = 16;

increaseButton.addEventListener('click', () => {
  currentFontSize += 2;
  document.body.style.fontSize = `${currentFontSize}px`;
});

decreaseButton.addEventListener('click', () => {
  currentFontSize = Math.max(currentFontSize - 2, 10);
  document.body.style.fontSize = `${currentFontSize}px`;
});

backgroundColorSelect.addEventListener('change', () => {
  const selectedColor = backgroundColorSelect.value;

  document.body.style.backgroundColor = selectedColor;
});
