const numberContainer = document.querySelector('#numbers');

for(let i = 1; i <= 9; i++){
    const button = document.createElement("button");
    button.classList.add(".btn");
    button.textContent = `${i}`;

    numberContainer.appendChild(button);
}