// task05.js

const canvas = document.querySelector('canvas');
const pauseButton = document.querySelector('button:nth-child(1)');
const stopButton = document.querySelector('button:nth-child(2)');
const muteButton = document.querySelector('button:nth-child(3)');

const ctx = canvas.getContext('2d');

const triangleCoordinates = [
  { x: 6, y: 6 },
  { x: 14, y: 10 },
  { x: 6, y: 14 },
];

function drawTriangle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(triangleCoordinates[0].x, triangleCoordinates[0].y);

  for (const point of triangleCoordinates) {
    ctx.lineTo(point.x, point.y);
  }

  ctx.closePath();
  
  ctx.fill();
  ctx.stroke();
}

drawTriangle();

const audio = new Audio('music/music.mp3');

pauseButton.addEventListener('click', () => {
  if (!audio.paused) {
    audio.pause();
  }
});

stopButton.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

muteButton.addEventListener('click', () => {
  audio.muted = !audio.muted;
});

function playMusic() {
  audio.play();
}

const playButton = document.querySelector('canvas');
playButton.addEventListener('click', playMusic);
