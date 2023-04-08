let slider = document.getElementById('myRange');
let output = document.querySelector('.password-number');
let passText = document.querySelector('.passwordText').innerHTML;
let clipBoard = document.querySelector('.clip');
let btn = document.getElementById('btn');
let passwordBars = document.querySelectorAll('.span');
let checkBox = document.querySelectorAll('.checkbox')
let btns = document.querySelectorAll('.btns');


output.innerHTML = slider.value;

btn.addEventListener('submit',()=>{
    console.log(generatePassword(7,true,true,true,true))
} )

slider.oninput = () =>{
    output.innerHTML = slider.value;
    handleInputChange();
}


clipBoard.onclick = () =>{
    copyToClipboard();
    showPopUp();
}

const handleInputChange = () =>{
    let min = slider.min;
    let max = slider.max;
    let val = slider.value;
    slider.style.backgroundSize = (val-min) * 100 / (max-min) + '% 100%'
}

const copyToClipboard = () => {
    navigator.clipboard.writeText(passText).then(() => {
    });
}

const showPopUp = () =>{
        let popup = document.getElementById("myPopup");
        popup.style.display = 'block';

}

const generatePassword = (length,hasNumber,hasUppercase,hasLowercase,hasSymbol) =>{
    let passWord = '';
    let characters = '';

    if(hasNumber){
        characters += '0123456789';
    }
    if(hasUppercase){
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(hasLowercase){
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if(hasSymbol){
        characters += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    }

    for (let i = 0; i< length; i++){
        let ranNum = Math.floor(Math.random()*characters.length);
        passWord += characters[ranNum]
    }

    return passWord;
}

checkBox.forEach( box => {
    box.addEventListener('click',(e)=>{
        let styles = e.currentTarget.classList;

        if(includeUppercase()){
            console.log('Uppercase');
        } else if (styles.contains('lowercase')){
            console.log('Lowercase')
        } else if (styles.contains('numbers')){
            console.log('Numbers')
        } else {
            console.log('Symbols')
        }
    })
})
















