let slider = document.getElementById('myRange');
let output = document.querySelector('.password-number');
let passText = document.querySelector('.passwordText').innerHTML;
let clipBoard = document.querySelector('.clip')

output.innerHTML = slider.value;

slider.oninput = () =>{
    output.innerHTML = slider.value;
    handleInputChange();
}

clipBoard.onclick = () =>{
    copyToClipboard();
}

const handleInputChange = () =>{
    let min = slider.min;
    let max = slider.max;
    let val = slider.value;
    slider.style.backgroundSize = (val-min) * 100 / (max-min) + '% 100%'
}

const copyToClipboard = () => {
    navigator.clipboard.writeText(passText).then(() => {
        alert("Copied to clipboard");
    });
}

