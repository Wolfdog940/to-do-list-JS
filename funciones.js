const addElementOnEnter = (evento) => {
    if (evento.key === "Enter") {

        evento.preventDefault();

        let userInput = getUserInput();

        if (!userInput.length) {
            alert("el input esta vacio")
            return;
        }

        let todoList = getList();
        let newElement = createListElement();
        todoList.appendChild(newElement);
        eraseUserInput();
    }
}

const createListElement = () => {
    let element = document.createElement("li");
    element.innerHTML = getUserInput();
    element.appendChild(createDeleteButton(element));
    element.addEventListener("click", strikeElement);
    return element;
}

const strikeElement = (pointerEvent) => {
    console.log(pointerEvent)
    let element = pointerEvent.target;
    element.style.color = "black"
    element.style.backgroundColor = "rgba(207, 125, 31, 0.2)";
    element.style.textDecoration = "line-through";
}

const createDeleteButton = (element) => {
    let newbutton = document.createElement("button")
    newbutton.addEventListener("click", function () {
        console.log(element)
        let list = getList();
        list.removeChild(element)
    });
    return newbutton;
}

const eraseUserInput = () => {
    document.getElementById("todoInput").value = "";
}

const getList = () => {
    return document.getElementById("ul");
}

const getUserInput = () => {
    let userInput = document.getElementById("todoInput").value.trim()
    return userInput.charAt(0).toUpperCase() + userInput.slice(1)
}