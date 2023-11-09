import { projectTracker, Project, ToDo } from "../todos/todo.js";
import toDoData from "../todos/todo-data.json";
import "./style.css";

function getProjectIcon()  {
    let projectIconTemplate = document.getElementById("projectIconTemplate");
    let iconTemplateNode = projectIconTemplate.content.cloneNode(true);
    return iconTemplateNode.querySelector(".projectIcon");
}

let defaultProject = new Project();
let workProject = new Project("work");

for(let eachToDoArg of toDoData.todos) {
    let eachToDo = new ToDo(...eachToDoArg);
    defaultProject.addToDo(eachToDo);
}

projectTracker.addProject(defaultProject);
projectTracker.addProject(workProject);

let projectMenu = document.createElement("div");
projectMenu.classList.add("projectMenu");

let projectMenuHeader = document.createElement("div");
projectMenuHeader.classList.add("projectMenuHeader");

let projectAddBtn = document.createElement("button");
projectAddBtn.classList.add("projectMenuHeaderBtn");
projectAddBtn.textContent = "+";
projectMenuHeader.appendChild(projectAddBtn);

let projectMenuHeaderText = document.createElement("h4");
projectMenuHeaderText.classList.add("projectMenuHeaderText");
projectMenuHeaderText.textContent = "Projects";
projectMenuHeader.appendChild(projectMenuHeaderText);

projectMenu.appendChild(projectMenuHeader);

let projectMenuSep = document.createElement("div");
projectMenuSep.classList.add("projectMenuSeparator");
projectMenu.appendChild(projectMenuSep);

let projectMenuList = document.createElement("ul");
projectMenuList.classList.add("projectMenuList");
projectMenu.appendChild(projectMenuList);

let allProjects = projectTracker.getAllProjects();
allProjects.forEach(eachProject => {
    let projectItem = document.createElement("li");
    projectItem.classList.add("projectItem");
    projectItem.appendChild(getProjectIcon());

    let projectItemText = document.createElement("span");
    projectItemText.classList.add("projectItemText");
    projectItemText.textContent = eachProject.name;
    projectItem.appendChild(projectItemText);

    projectMenuList.appendChild(projectItem);
});

export {
    projectMenu
};

