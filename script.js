const numberContainer = document.querySelector('#numbers');
const userInput = document.querySelector("#user-input");

for(let i = 1; i <= 9; i++){
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = `${i}`;
    button.addEventListener("click", () =>{
        userInput.textContent += i;
    })    
    numberContainer.appendChild(button);
}

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => userInput.textContent = '');