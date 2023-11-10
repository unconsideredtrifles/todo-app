import { projectTracker, Project, ToDo } from "../todos/todo.js";
import toDoData from "../todos/todo-data.json";
import "./style.css";


function getProjectIcon()  {
    let projectIconTemplate = document.getElementById("projectIconTemplate");
    let iconTemplateNode = projectIconTemplate.content.cloneNode(true);
    return iconTemplateNode.querySelector(".projectIcon");
}


class PageElementUI {
    constructor(root, parentElement) {
        this.parent = document.createElement(parentElement.name);
        this.parent.classList.add(parentElement.class)
        root.appendChild(this.parent);
    }

    addChildren(elements) {
        elements.forEach(eachElement => {
            let element = document.createElement(eachElement.name);
            element.classList.add(eachElement.class);
            let childType = (!eachElement.type) ? "text" : eachElement.type;
            if(childType === "text") {
                element.textContent = eachElement.content;
            } else if(childType === "element") {
                element.appendChild(eachElement.content);
            }
            this.parent.appendChild(element);
        });
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
menuHeader.addChildren([
    { 
        name: "button", 
        class: "projectMenuHeaderBtn",
        content: "+",
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
    let menuItem = new PageElementUI(menuItemList.parent, {
        name: "li",
        class: "projectItem",
    });
    menuItem.parent.appendChild(getProjectIcon());
    menuItem.addChildren([
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

