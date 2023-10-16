const form = document.querySelector('form');
const darkModeButton = document.getElementById('dark-mode-button')
const root = document.documentElement

function enableDarkMode() {
    root.classList.add('dark-mode');
}

function disableDarkMode() {
    root.classList.remove('dark-mode');
}

darkModeButton.addEventListener("click", function(){
    if (root.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
})

function getInputString(param) {
    const inputString = form.querySelector(`input[id=${param}]`);

    return inputString.value;
}

function addContact(name, number) {
    return `
        <tr>
            <td>${name}</td>
            <td>${number}</td>
        </tr>
    `;
}

// também poderia ter usado o insertRow() e o insertCell()

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const name = getInputString("name");
    const number = getInputString("number");

    const newTableRow = addContact(name, number);

    const tbody = document.querySelector("tbody");
    tbody.innerHTML += newTableRow;
})
