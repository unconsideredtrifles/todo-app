import {
    ToDoDate, 
    DateValidator,
} from "../dates/date.js";
import toDoData from "./todo-data.json";


class ProjectTracker {
    #allProjects;

    constructor(allProjects = []) {
        this.#allProjects = allProjects;
    }

    getAllProjects() {
        return this.#allProjects;
    }

    addProject(project) {
        if(this.isDuplicateProject(project)) {
            return;
        }
        this.#allProjects.push(project);
    }

    removeProject(projectName) {
        let idx2Delete = this.#allProjects.findIndex(eachProject => 
            eachProject.name === projectName
        );
        this.#allProjects.splice(idx2Delete, 1);
    }

    isDuplicateProject(project) {
        return this.#allProjects.some(eachProject => 
            eachProject.name === project.name
        );
    }
}


class Project {
    #toDoArr;

    constructor(name = "default", toDoArr = []) {
        this.name = name;
        this.#toDoArr = toDoArr;
    }

    addToDo(toDo) {
        if(this.isDuplicateToDo(toDo)) {
            return;
        }
        this.#toDoArr.push(toDo);
    }

    isDuplicateToDo(toDo) {
        return this.#toDoArr.some(eachToDo => {
            let titleEquality = eachToDo.title === toDo.title;
            let descrEquality = eachToDo.description === toDo.description;
            let priorityEquality = eachToDo.priority === toDo.priority;
            let dueDateEquality = eachToDo.dueDate === toDo.dueDate;

            return (titleEquality && descrEquality && 
                priorityEquality && dueDateEquality);
        })
    }

    getAllToDos() {
        return this.#toDoArr;
    }

    removeToDo(toDoID) {
        let idx2Delete = this.#toDoArr.findIndex(
            eachToDo => eachToDo.toDoID === toDoID
        );
        this.#toDoArr.splice(idx2Delete, 1);
    }
}


class ToDo {
    static nextToDoID = 0;
    #dueDate;

    constructor(title, description, priority, dueDate, parentTodo = null, childTodo = null) {
        this.toDoID = ToDo.nextToDoID++;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;

        this.parentTodo = parentTodo;
        this.childTodo = childTodo;

    }

    get dueDate() {
        return this.#dueDate.getDateStr();
    }

    set dueDate(dueDate) {
        let dateValidator = new DateValidator(dueDate);
        let status = dateValidator.validate();

        this.#dueDate = new ToDoDate(dueDate);
    }
}


let defaultProject = new Project();
let workProject = new Project("work");

let projectTracker = new ProjectTracker();
projectTracker.addProject(defaultProject);
projectTracker.addProject(workProject);

for(let eachToDoArg of toDoData.todos) {
    let eachToDo = new ToDo(...eachToDoArg);
    defaultProject.addToDo(eachToDo);
}

export {
    ToDo,
    Project,
    projectTracker,
};