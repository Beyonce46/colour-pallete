const generateBtn = document.getElementById('generate-btn');
const paletteContainer = document.getElementById('palette');


/*--"When someone clicks the button, run the function called generatePalette."*/
generateBtn.addEventListener('click', generatePalette);


//function to generate random hex color
function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i<6;i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}
//generate a new palette of 5 colors
function generatePalette() {
    const colors = [];
    for (let i = 0; i < 5; i++) {  //generate 5 random colors
        colors.push(generateRandomColor());
    }
    updatePaletteDisplay(colors); //this updates my boxes
    }


//update with new colors
    function updatePaletteDisplay(colors) {
        const colorBoxes = document.querySelectorAll(".color-box");

        colorBoxes.forEach((box, index) => {
            const color = colors[index];
            const colorDiv = box.querySelector(".color");
            const hexValue = box.querySelector(".hex-value");
            const copyBtn =box.querySelector(".copy-btn");
            
            colorDiv.style.backgroundColor = color;
            hexValue.textContent = color;

            hexValue.onclick = () => copyToClickboard(color, hexValue);
            copyBtn.onclick = () => copyToClickboard(color, hexValue);
        
        });
    }
     //copy function
     function copyToClickboard(color,hexValue) {
        navigator.clipboard.writeText(color).then(() => {
            hexValue.textContent = "Copied!";
            setTimeout(() => {
                hexValue.textContent = color;
            }, 1000);
            }).catch((err) => console.log(err));
     }

        
//generatePalette function to generate and display a new palette when refresh the page

generatePalette(); //Call the function to generate the palette when the page loads  