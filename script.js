const numberContainer = document.querySelector('#numbers');
const userInput = document.querySelector("#user-input");

let num1 = 0;
let num2 = 0;

let isCleared = false;

const clear = document.querySelector("#clear");

clear.addEventListener("click", function(){
    isCleared = false;
    operator = 0;
    num1 = 0;
    num2 = 0;
    userInput.textContent = '';
});

const del = document.querySelector("#delete");

del.addEventListener("click", () => userInput.textContent = userInput.textContent.substring(0, userInput.textContent.length - 1));

for(let i = 1; i <= 9; i++){
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = `${i}`;
    
    
    button.addEventListener("click", () =>{
        userInput.textContent += i;
        
        if(operator == 0){
            num1 = parseInt(userInput.textContent)
        }
        else if(operator != 0 && isCleared == false) {
            isCleared = true;
            userInput.textContent = '';
            userInput.textContent += i;
            num2 = userInput.textContent;
        }else{
            num2 = userInput.textContent;
        }
        })    

    numberContainer.appendChild(button);
}

//operators

const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const equals = document.querySelector("#equals")

const Operations = Object.freeze({
    ADD: 1,
    SUBTRACT: 2,
    MULTIPLY: 3,
    DIVIDE: 4
});

let operator = 0;

divide.addEventListener("click", () => {
    let num1 = userInput.textContent;
    operator = 4;
})

multiply.addEventListener("click", () => {
    let num1 = userInput.textContent;
    operator = 3;
})

subtract.addEventListener("click", () => {
    let num1 = userInput.textContent;
    operator = 2;
})

add.addEventListener("click", () => {
    let num1 = userInput.textContent;
    operator = 1;
})


equals.addEventListener("click", () => {
    if(isCleared){
        switch(operator){
            case 1:
                num1 = num1 + num2;
                break;
            case 2:
                num1 = num1 - num2;
                break;
            case 3:
                num1 = num1 * num2;
                break;
            case 4:
                if(num2 == 0) userInput.textContent = "Error";
                else num1 = num1/num2;
        }

        userInput.textContent = num1;
        isCleared = false;
        num2 = 0;
    }
})