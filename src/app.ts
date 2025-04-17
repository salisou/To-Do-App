function createTaskElement(taskText: string) {
    const li = document.createElement("li"); // Crea un elemento <li> per rappresentare l'attività

    const taskTextElement = document.createElement("span"); // Crea un elemento <span> per il testo dell'attività
    taskTextElement.textContent = taskText; // Imposta il testo dell'attività

    const editButton = document.createElement("button"); // Crea un pulsante "Edit"
    editButton.textContent = "Edit"; // Imposta il testo del pulsante

    // Aggiunge un evento click al pulsante "Edit" per modificare il testo dell'attività
    editButton.addEventListener("click", () => {
        const newText = prompt("Edit task:", taskText); // Mostra un prompt per inserire un nuovo testo
        if (newText !== null) {
            taskTextElement.textContent = newText; // Aggiorna il testo dell'attività
        }
    });

    const deleteButton = document.createElement("button"); // Crea un pulsante "Delete"
    deleteButton.textContent = "Delete"; // Imposta il testo del pulsante

    // Aggiunge un evento click al pulsante "Delete" per rimuovere l'attività dalla lista
    deleteButton.addEventListener("click", () => {
        li.remove(); // Rimuove l'elemento <li> dalla lista
    });

    // Aggiunge il testo dell'attività, il pulsante "Edit" e il pulsante "Delete" all'elemento <li>
    li.appendChild(taskTextElement);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    return li; // Restituisce l'elemento <li> completo
}

function addTask() {
    const taskInput = document.getElementById("taskInput") as HTMLInputElement; // Recupera l'input dell'utente
    const taskText = taskInput.value.trim(); // Ottiene il valore dell'input e rimuove gli spazi vuoti

    if (taskText === "") { // Controlla se il testo è vuoto
        alert("Please enter a task..."); // Mostra un avviso se il testo è vuoto
        return; // Interrompe l'esecuzione della funzione
    }

    const taskList = document.getElementById("taskList") as HTMLUListElement; // Recupera la lista delle attività
    const taskElement = createTaskElement(taskText); // Crea un nuovo elemento della lista con il testo dell'attività
    taskList.appendChild(taskElement); // Aggiunge l'elemento alla lista
    taskInput.value = ""; // Svuota il campo di input
}

document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton"); // Recupera il pulsante "Add"

    if (addButton) { // Controlla se il pulsante esiste
        addButton.addEventListener("click", addTask); // Aggiunge un evento click al pulsante per chiamare `addTask`
    }
});
