import { projectTracker, Project, ToDo } from "./todos/todo.js";
import toDoData from "./todos/todo-data.json";
import "./style.css";

let defaultProject = new Project();
let workProject = new Project("work");

for(let eachToDoArg of toDoData.todos) {
    let eachToDo = new ToDo(...eachToDoArg);
    defaultProject.addToDo(eachToDo);
}

projectTracker.addProject(defaultProject);
projectTracker.addProject(workProject);

let allProjects = projectTracker.getAllProjects();
let projectList = document.createElement("ul");
projectList.classList.add("projectMenu");

allProjects.forEach(eachProject => {
    let projectItem = document.createElement("li");
    projectItem.textContent = eachProject.name;
    projectList.appendChild(projectItem);
});

let hamburgerBtn = document.getElementById("hamburger");
let openIcon = document.getElementById("openIcon");
let closeIcon = document.getElementById("closeIcon");

hamburgerBtn.addEventListener("click", e => {
    if(projectList.classList.contains("showProjectMenu")) {
        openIcon.style.display = "inline";
        closeIcon.style.display = "none";
    } else {
        openIcon.style.display = "none";
        closeIcon.style.display = "inline";
    }
    projectList.classList.toggle("showProjectMenu");
})

document.body.appendChild(projectList);

