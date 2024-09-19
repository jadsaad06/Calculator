const numberContainer = document.querySelector('#numbers');

for(let i = 1; i <= 9; i++){
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = `${i}`;
    button.addEventListener("click", () =>{
        const userInput = document.querySelector("#user-input");
        userInput.textContent += i;
    })    
    numberContainer.appendChild(button);
}

