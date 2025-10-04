const $doc = document;
const createBtn = $doc.getElementById('create');
const display = $doc.getElementById('display');
const red = $doc.getElementById('red');
const blue = $doc.getElementById('blue');
const green = $doc.getElementById('green');
const yellow = $doc.getElementById('yellow');
const black = $doc.getElementById('black');
const white = $doc.getElementById('white');
const purple = $doc.getElementById('purple');
const gray = $doc.getElementById('gray');
let isDrawing = false;
let currentColor = 'black';



createBtn.addEventListener('click', () => {
    const rows = $doc.getElementById('rows').value;
    const cols = $doc.getElementById('cols').value;
    
    $doc.addEventListener('mousedown', () => isDrawing = true);
    $doc.addEventListener('mouseup', () => isDrawing = false);


    display.innerHTML = '';


    display.style.gridTemplateColumns = `repeat(${cols}, 15px)`;
    display.style.gridTemplateRows = `repeat(${rows}, 15px)`;


    for(let i = 0; i < rows * cols; i++){
        const pixel = $doc.createElement('div');
        pixel.className = 'pixel'
        display.appendChild(pixel);

        
        pixel.addEventListener('mousedown', () => {
        pixel.style.backgroundColor = currentColor;
        });
            
        pixel.addEventListener('mouseover', () => {
        if (isDrawing) {
            pixel.style.backgroundColor = currentColor; // 長押しドラッグ
        }
        });
        
    
    }
})


red.addEventListener('click', () => {
    currentColor = 'red'
})

blue.addEventListener('click', () => {
    currentColor = 'blue'
})
green.addEventListener('click', () => {
    currentColor = 'green'
})
yellow.addEventListener('click', () => {
    currentColor = 'yellow'
})
black.addEventListener('click', () => {
    currentColor = 'black'
})
white.addEventListener('click', () => {
    currentColor = 'white'
})
gray.addEventListener('click', () => {
    currentColor = 'gray'
})
purple.addEventListener('click', () => {
    currentColor = 'purple'
})