const form = document.querySelector('form');

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
