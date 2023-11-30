import { projectTracker } from "../todos/todo.js";


function makeContentEditable(e, elementToEdit, toDoID, toDoProp, maxTextLen) {
    elementToEdit.setAttribute("contenteditable", "true");
    elementToEdit.addEventListener("keydown", e => {
        if((!e.ctrlKey) && (!["Enter", "Escape", "Backspace"].includes(e.key)) 
            && e.target.textContent.length >= maxTextLen) {
            e.preventDefault();
            return;
        }

        if(e.key === "Enter") {
            let toDoToEdit = projectTracker.activeProject.getToDo(toDoID);
            toDoToEdit[toDoProp] = e.target.textContent;
            e.target.removeAttribute("contenteditable");
        } else if (e.key === "Escape") {
            e.target.removeAttribute("contenteditable");
        }
    })
    elementToEdit.focus();
}


function makeTitleEditable(e) {
    let toDoTopRow = this.parentElement.parentElement;
    let toDoTitle = toDoTopRow.children[0].children[1];
    let toDoID = +toDoTopRow.parentElement.dataset.id;

    makeContentEditable(e, toDoTitle, toDoID, "title", 30);
}

function makeDescriptionEditable(e) {
    let toDoDescription = this.parentElement.children[0]
    let toDo = this.parentElement.parentElement.parentElement
    let toDoID = +toDo.dataset.id;

    makeContentEditable(e, toDoDescription, toDoID, "description", 100);
}

function getToDoToEdit(element) {
    let currentToDoEl = element.parentElement;
    for(let i = 0; i < 2; i++) {
        currentToDoEl = currentToDoEl.parentElement;
    }
    let toDoID = +currentToDoEl.dataset.id;
    return projectTracker.activeProject.getToDo(toDoID);
}


function editToDoDate(e) {
    let toDoToEdit = getToDoToEdit(this);
    toDoToEdit.dueDate = e.target.value;
}


function editToDoPriority(e) {
    let toDoToEdit = getToDoToEdit(this);
    this.classList.remove(toDoToEdit.priority + "Priority");
    toDoToEdit.rotatePriority();

    let newClassName = toDoToEdit.priority + "Priority";
    this.classList.add(newClassName);
    let hoverText = this.getElementsByTagName("title")[0];
    hoverText.textContent = toDoToEdit.priority + " priority";
}


function deleteToDo(e) {
    let toDoToEdit = getToDoToEdit(this);
    projectTracker.activeProject.removeToDo(toDoToEdit.toDoID);

    let currentToDoEl = this.parentElement;
    for(let i = 0; i < 2; i++) {
        currentToDoEl = currentToDoEl.parentElement;
    }
    
    let separatorToRemove = currentToDoEl.nextElementSibling;
    currentToDoEl.parentElement.removeChild(separatorToRemove);
    currentToDoEl.parentElement.removeChild(currentToDoEl);
}


export {
    makeTitleEditable,
    makeDescriptionEditable,
    editToDoPriority,
    editToDoDate,
    deleteToDo,
};