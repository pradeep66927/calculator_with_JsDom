const display = document.getElementById("display");
const buttons = document.getElementById("buttons")

buttons.addEventListener("click",(event)=>{
    let target = event.target;
    ClickSound();
    if (target.innerHTML === "C") {
        display.value = "";
    } else if (target.classList.contains("number")) {
        display.value += target.innerHTML;
    }else if (target.classList.contains("operator")) {
        let lastChar = display.value[display.value.length -1]; // for select last charactor of string
        if (["+","-","*","/"].includes(lastChar)) {
            display.value = display.value.slice(0,-1) + target.innerHTML;  //eliminates repeated operators 
        } else {
            display.value += target.innerHTML;
        }
    } else if (target.innerHTML === "=") {
        if (display.value.length != 0) {
            //handling uexpected syntax expressions
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "syntax Error!";
            }
        } else display.value = "";
    }
});

// we are adding key events to whole body
// *The keypress ignores keys such as delete , page up, page down ,home,end ,ctrl,alt,shift,esc,etc

document.body.addEventListener("keypress",(event) => {
    let target = event.key; // key pressed 
    const numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
    const operatorsArray = ["+","-","*","/"];
    if (target === "c") {
        display.value = "";
    } else if (numbersArray.includes(target)) {
        display.value += target;
    } else if (operatorsArray.includes(target)) {
        let lastChar = display.value[display.value.length - 1]; //last char of 
        if (operatorsArray.includes(lastChar)) {
            display.value = display.value.slice(0,-1) + target; //eliminates repeated operators
        } else {
            display.value += target;
        }
    } else if (target === "=") {
        if (display.value.length != 0) {
            try {
                display.value = eval(display.value);
            } catch (erro) {
              display.value = "syntax Error"   
            }
        } else display.value = "";
    } else {
     alert("wrong key pressed ");
    } 
        
});

// 
function ClickSound() {
    let audio = new Audio("./sound/sound.mp3"); //for sound
    audio.play();
}
