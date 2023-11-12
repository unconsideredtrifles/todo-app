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
        let projectToAdd = new Project(e.target.textContent);
        projectTracker.addProject(projectToAdd);
        e.target.parentElement.style.backgroundColor = "";
    }

    if(e.key === "Escape") {
        cancelNameAddBox(e);
    }
}


function addProjectItem() {
    let projectItem = new DOMTree(menuItemList.getRootElement(), {
        name: "li",
        class: "projectItem"
    });
    projectItem.getRootElement().style.backgroundColor = "#d8d8d8";
    projectItem.addChild(getProjectIcon());

    let projectNameAddBox = document.createElement("span");
    projectNameAddBox.classList.add("projectItemText");
    projectNameAddBox.setAttribute("contenteditable", "true");
    projectNameAddBox.setAttribute("spellcheck", "false");
    projectNameAddBox.addEventListener("keydown", setProjectName);
    projectItem.addChild(projectNameAddBox);
    projectNameAddBox.focus();
}


class DOMTree {
    #rootElement;

    constructor(parent, rootElement) {
        this.#rootElement = document.createElement(rootElement.name);
        this.#rootElement.classList.add(rootElement.class)
        parent.appendChild(this.#rootElement);
    }

    addElements(elements) {
        elements.forEach(eachElement => {
            let element = document.createElement(eachElement.name);
            element.classList.add(eachElement.class);
            element.textContent = eachElement.content;
            if("listener" in eachElement) {
                element.addEventListener(...eachElement.listener);
            }

            this.#rootElement.appendChild(element);
        });
    }

    getRootElement() {
        return this.#rootElement;
    }

    addChild(child) {
        this.#rootElement.appendChild(child);
    }

}


let projectMenu = document.createElement("div");
projectMenu.classList.add("projectMenu");

let menuHeader = new DOMTree(projectMenu, {
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

let menuSeparator = new DOMTree(projectMenu, {
    name: "div",
    class: "projectMenuSeparator"
});

let menuItemList = new DOMTree(projectMenu, {
    name: "ul",
    class: "projectMenuList",
});

let allProjects = projectTracker.getAllProjects();
allProjects.forEach(eachProject => {
    let menuItem = new DOMTree(menuItemList.getRootElement(), {
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

