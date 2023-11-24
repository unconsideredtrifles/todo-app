import {
    ToDoDate, 
    DateValidator,
} from "../dates/date.js";
import toDoData from "./todo-data.json";


class ProjectTracker {
    #allProjects;
    #currentProject;

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

    renameProject(currentName, newName) {
        let proj = this.#allProjects.find(eachProject => {
            return eachProject.name === currentName;
        });
        if(proj) {
            proj.name = newName;
        } else {
            throw new Error(`Can't rename Project '${currentName}' ` +
                            `since it doesn't exist`);
        }
    }

    removeProject(projectName) {
        if(this.activeProject && projectName === this.activeProject.name) {
            this.activeProject = undefined;
        }

        let idx2Delete = this.#allProjects.findIndex(eachProject => 
            eachProject.name === projectName
        );
        this.#allProjects.splice(idx2Delete, 1);
    }

    get activeProject() {
        return this.#currentProject;
    }

    set activeProject(projectName) {
        if(projectName === undefined) {
            this.#currentProject = undefined;
            return;
        }

        for(let eachProject of this.#allProjects) {
            if(eachProject.name === projectName) {
                this.#currentProject = eachProject;
                break;
            }
        }
    }

    isDuplicateProject(project) {
        return this.#allProjects.some(eachProject => 
            eachProject.name === project.name
        );
    }
}


class Project {
    constructor(name = "default", toDoArr = []) {
        this.name = name;
        this.toDoArr = toDoArr;
    }

    addToDo(toDo) {
        if(this.isDuplicateToDo(toDo)) {
            throw new Error("Don't try to add a duplicate todo");
        }
        this.toDoArr.push(toDo);
    }

    isDuplicateToDo(toDo) {
        return this.toDoArr.some(eachToDo => {
            let titleEquality = eachToDo.title === toDo.title;
            let descrEquality = eachToDo.description === toDo.description;
            let priorityEquality = eachToDo.priority === toDo.priority;
            let dueDateEquality = eachToDo.dueDate === toDo.dueDate;

            return (titleEquality && descrEquality && 
                priorityEquality && dueDateEquality);
        })
    }

    getToDo(toDoID) {
        return this.toDoArr.find(eachToDo => {
            return eachToDo.toDoID === toDoID;
        });
    }

    getAllToDos() {
        return this.toDoArr;
    }

    toggleFinish(toDoID) {
        let todo = this.getToDo(toDoID);
        if(todo.finished) {
            todo.finished = false;
        } else {
            todo.finished = true;
        }
    }

    removeToDo(toDoID) {
        let idx2Delete = this.toDoArr.findIndex(
            eachToDo => eachToDo.toDoID === toDoID
        );
        this.toDoArr.splice(idx2Delete, 1);
    }
}


class ToDo {
    static priorities = ["low", "medium", "high"];
    static nextToDoID = 0;
    #priority;
    #dueDate;

    constructor(title, description, priority, dueDate, parentTodo = null, childTodo = null) {
        this.toDoID = ToDo.nextToDoID++;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;

        this.parentTodo = parentTodo;
        this.childTodo = childTodo;
        this.finished = false;
    }

    get priority() {
        return this.#priority;
    }

    set priority(value) {
        if(!ToDo.priorities.includes(value)) {
            throw new Error("priority must be one of low, medium and high");
            return;
        }
        this.#priority = value;
    }

    rotatePriority() {
        let priorityIdx = ToDo.priorities.indexOf(this.priority);
        priorityIdx++
        if(priorityIdx >= ToDo.priorities.length) {
            priorityIdx = 0;
        }
        this.priority = ToDo.priorities[priorityIdx];
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
projectTracker.activeProject = defaultProject.name;
projectTracker.addProject(workProject);

for(let eachToDoArg of toDoData.default) {
    let eachToDo = new ToDo(...eachToDoArg);
    defaultProject.addToDo(eachToDo);
}

for(let eachToDoArg of toDoData.work) {
    let eachToDo = new ToDo(...eachToDoArg);
    workProject.addToDo(eachToDo);
}

export {
    ToDo,
    Project,
    projectTracker,
};