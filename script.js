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

//calculations

let result = 0;

const divide = function(result){

}