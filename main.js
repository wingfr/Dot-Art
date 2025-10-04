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
const black2 = $doc.getElementById('black2');
const red2 = $doc.getElementById('red2');
const blue2 = $doc.getElementById('blue2');
const green2 = $doc.getElementById('green2');
const yellow2 = $doc.getElementById('yellow2');
const white2 = $doc.getElementById('white2');
const purple2= $doc.getElementById('purple2');
const black3 = $doc.getElementById('black3');
const red3 = $doc.getElementById('red3');
const blue3 = $doc.getElementById('blue3');
const green3 = $doc.getElementById('green3');
const yellow3 = $doc.getElementById('yellow3');
const white3 = $doc.getElementById('white3');
const purple3= $doc.getElementById('purple3');
const black4 = $doc.getElementById('black4');
const red4 = $doc.getElementById('red4');
const blue4 = $doc.getElementById('blue4');
const green4 = $doc.getElementById('green4');
const yellow4 = $doc.getElementById('yellow4');
const white4 = $doc.getElementById('white4');
const purple4= $doc.getElementById('purple4');
const saveBtn = document.getElementById('save');
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

saveBtn.addEventListener('click', () => {
  html2canvas(display).then((canvas) => {
    const link = document.createElement('a');
    link.download = 'dot-art.png';   // 保存するファイル名
    link.href = canvas.toDataURL(); // PNGデータに変換
    link.click();
  });
});

red.addEventListener('click', () => {
    currentColor = 'red'
})
blue.addEventListener('click', () => {
    currentColor = 'blue'
})
green.addEventListener('click', () => {
    currentColor = 'rgb(0, 255, 0)'
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
black2.addEventListener('click', () => {
    currentColor = 'rgb(98, 98, 98)'
})
purple.addEventListener('click', () => {
    currentColor = 'rgb(255, 0, 255)'
})
red2.addEventListener('click', () => {
    currentColor = 'rgb(134, 0, 0)'
})
blue2.addEventListener('click', () => {
    currentColor = 'rgb(0, 0, 161)'
})
green2.addEventListener('click', () => {
    currentColor = 'rgb(0, 192, 0)'
})
yellow2.addEventListener('click', () => {
    currentColor = 'rgb(214, 214, 0)'
})
white2.addEventListener('click', () => {
    currentColor = 'rgb(195, 195, 195)'
})
purple2.addEventListener('click', () => {
    currentColor = 'rgb(163, 0, 163)'
})
red3.addEventListener('click', () => {
    currentColor = 'rgb(77, 0, 0)'
})
blue3.addEventListener('click', () => {
    currentColor = 'rgb(0, 0, 100)'
})
green3.addEventListener('click', () => {
    currentColor = 'rgb(0, 143, 0)'
})
yellow3.addEventListener('click', () => {
    currentColor = 'rgb(148, 148, 0)'
})
white3.addEventListener('click', () => {
    currentColor = 'rgb(138, 138, 138)'
})
purple3.addEventListener('click', () => {
    currentColor = 'rgb(105, 0, 105)'
})
black3.addEventListener('click', () => {
    currentColor = 'rgb(129, 129, 129)'
})
red4.addEventListener('click', () => {
    currentColor = 'rgb(49, 0, 0)'
})
blue4.addEventListener('click', () => {
    currentColor = 'rgb(0, 0, 59)'
})
green4.addEventListener('click', () => {
    currentColor = 'rgb(0, 86, 0)'
})
yellow4.addEventListener('click', () => {
    currentColor = 'rgb(88, 88, 0)'
})
white4.addEventListener('click', () => {
    currentColor = 'rgb(99, 99, 99)'
})
purple4.addEventListener('click', () => {
    currentColor = 'rgb(68, 0, 68)'
})
black4.addEventListener('click', () => {
    currentColor = 'rgb(176, 176, 176)'
})
