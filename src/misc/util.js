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
        this.#rootElement = this.initElement(rootElement);
        parent.appendChild(this.#rootElement);
    }

    addElements(elements) {
        elements.forEach(eachElement => {
            let element = this.initElement(eachElement)
            this.#rootElement.appendChild(element);
        });
    }

    initElement(elementObj) {
        let element = document.createElement(elementObj.name);
        element.classList.add(elementObj.class);
        element.textContent = elementObj.content;
        if("listener" in elementObj) {
            element.addEventListener(...elementObj.listener);
        }
        return element;
    }

    getRootElement() {
        return this.#rootElement;
    }

    addChild(child) {
        this.#rootElement.appendChild(child);
    }

};

export {
    isDirectInstanceOf,
    getPrototype,
    DOMTree,
};