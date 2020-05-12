const container = document.querySelector('.container');

let numberOfPixels = prompt('How many columns would you like?');

createPixels(numberOfPixels);



function createPixels(n) {
    //Add css grid columns & rows
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;

    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    //Create Pixels
    for (i = 0; i <= (n*n) ; i++){
    
    const pixels = document.createElement('div');
    pixels.classList.add('pixel')
    container.appendChild(pixels);
    
    }
}

const pixels = document.querySelectorAll('.pixel');

function colorPixel(color){    

    for (i = 0; i <= pixels.length; i++) {
        pixels[i].addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = `${color}`;
        })
    }
    
    
    
}

colorPixel('black');
