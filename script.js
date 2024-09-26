const numberContainer = document.querySelector('#numbers');
const userInput = document.querySelector("#user-input");


for(let i = 1; i <= 9; i++){
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = `${i}`;
    button.addEventListener("click", () =>{
        userInput.textContent += i;
        result = parseInt(userInput.textContent)
    })    
    numberContainer.appendChild(button);
}

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => userInput.textContent = '');

const del = document.querySelector("#delete");

del.addEventListener("click", () => userInput.textContent = userInput.textContent.substring(0, userInput.textContent.length - 1));

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

add.addEventListener("click", () => {
    let num1 = userInput.textContent;
    operator = 1;
})

subtract.addEventListener("click", () => {
    let num1 = userInput.textContent;
    operator = 2;
})

equals.addEventListener("click", () => {
    
})