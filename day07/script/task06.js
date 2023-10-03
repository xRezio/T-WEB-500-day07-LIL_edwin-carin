const canvas_box = document.querySelector('canvas')
const white_boxs = document.querySelectorAll('footer div')
const white_box = white_boxs[0]
const coordinates = white_boxs[1]

window.addEventListener('load', function () {
  white_box.style.position = 'relative'
  canvas_box.style.position = 'absolute'
});

let isDragging = false
let offsetX, offsetY
 
canvas_box.addEventListener('mousedown', (event) => {
  isDragging = true
  const rect = canvas_box.getBoundingClientRect()
  offsetX = event.clientX - rect.left
  offsetY = event.clientY - rect.top
});

 

document.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  
  const boxRect = white_box.getBoundingClientRect()
  const maxX = boxRect.width - canvas_box.offsetWidth
  const maxY = boxRect.height - canvas_box.offsetHeight

  let left = event.clientX - offsetX - boxRect.left
  let top = event.clientY - offsetY - boxRect.top

  left = Math.max(0, Math.min(maxX, left))
  top = Math.max(0, Math.min(maxY, top))

 

  canvas_box.style.left = `${left-5}px`
  canvas_box.style.top = `${top}px`

  coordinates.textContent = `New coordinates => {x:${left}, y:${top}}`
});

 

document.addEventListener('mouseup', () => {
  isDragging = false;
});