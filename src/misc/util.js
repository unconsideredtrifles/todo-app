function isDirectInstanceOf(instance, constructor) {
    let instancePrototype = Object.getPrototypeOf(instance);
    return instancePrototype === constructor.prototype;
}

function getPrototype(obj) {
    return Object.getPrototypeOf(obj);
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

export {
    isDirectInstanceOf,
    getPrototype,
    DOMTree,
};