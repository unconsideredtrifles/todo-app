import { projectTracker, Project, ToDo } from "../todos/todo.js";
import toDoData from "../todos/todo-data.json";
import "./style.css";


function getProjectIcon()  {
    let projectIconTemplate = document.getElementById("projectIconTemplate");
    let iconTemplateNode = projectIconTemplate.content.cloneNode(true);
    return iconTemplateNode.querySelector(".projectIcon");
}


function cancelNameAddBox(e) {
    let menuList = e.target.parentElement.parentElement;
    let menuListItem = e.target.parentElement;
    menuList.removeChild(menuListItem);
}


function setProjectName(e) {
    if(!(e.ctrlKey) && !(["Backspace", "Enter"].includes(e.key))
            && e.target.textContent.length >= 20) {
        e.preventDefault();
    }

    if(e.key === "Enter") {
        e.target.removeAttribute("contenteditable");
        projectTracker.addProject(e.target.textContent);
        e.target.parentElement.style.backgroundColor = "";
    }

    if(e.key === "Escape") {
        cancelNameAddBox(e);
    }
}


function addProjectItem() {
    let projectItem = new PageElementUI(menuItemList.getElement(), {
        name: "li",
        class: "projectItem"
    });
    projectItem.getElement().style.backgroundColor = "#d8d8d8";
    projectItem.addChild(getProjectIcon());

    let projectNameAddBox = document.createElement("span");
    projectNameAddBox.classList.add("projectItemText");
    projectNameAddBox.setAttribute("contenteditable", "true");
    projectNameAddBox.setAttribute("spellcheck", "false");
    projectNameAddBox.addEventListener("keydown", setProjectName);
    projectItem.addChild(projectNameAddBox);
    projectNameAddBox.focus();
}


class PageElementUI {
    #currentElement;

    constructor(parent, currentElement) {
        this.#currentElement = document.createElement(currentElement.name);
        this.#currentElement.classList.add(currentElement.class)
        parent.appendChild(this.#currentElement);
    }

    addElements(elements) {
        elements.forEach(eachElement => {
            let element = document.createElement(eachElement.name);
            element.classList.add(eachElement.class);
            element.textContent = eachElement.content;
            if("listener" in eachElement) {
                element.addEventListener(...eachElement.listener);
            }

            this.#currentElement.appendChild(element);
        });
    }

    getElement() {
        return this.#currentElement;
    }

    addChild(child) {
        this.#currentElement.appendChild(child);
    }

}


let defaultProject = new Project();
let workProject = new Project("work");

projectTracker.addProject(defaultProject);
projectTracker.addProject(workProject);

for(let eachToDoArg of toDoData.todos) {
    let eachToDo = new ToDo(...eachToDoArg);
    defaultProject.addToDo(eachToDo);
}

let projectMenu = document.createElement("div");
projectMenu.classList.add("projectMenu");

let menuHeader = new PageElementUI(projectMenu, {
    name: "div",
    class: "projectMenuHeader",
});

menuHeader.addElements([
    { 
        name: "button", 
        class: "projectMenuHeaderBtn",
        content: "+",
        listener: ["click", addProjectItem],
    },
    {
        name: "div",
        class: "projectMenuHeaderText",
        content: "Projects",
    }
]);

let menuSeparator = new PageElementUI(projectMenu, {
    name: "div",
    class: "projectMenuSeparator"
});

let menuItemList = new PageElementUI(projectMenu, {
    name: "ul",
    class: "projectMenuList",
});

let allProjects = projectTracker.getAllProjects();
allProjects.forEach(eachProject => {
    let menuItem = new PageElementUI(menuItemList.getElement(), {
        name: "li",
        class: "projectItem",
    });
    menuItem.addChild(getProjectIcon());
    menuItem.addElements([
        {
            name: "span",
            class: "projectItemText",
            content: eachProject.name,
        }
    ]);
});

export {
    projectMenu
};

