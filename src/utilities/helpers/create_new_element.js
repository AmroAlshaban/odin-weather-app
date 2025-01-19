export function createNewElement({nameTag='div', className='', idName='', textContent='', attributes={}} = {}) {
    const newElement = document.createElement(nameTag);
    if (Array.isArray(className)) {
        newElement.classList.add(...className);
    } else if (className !== '') {
        newElement.classList.add(className);
    }
    if (idName !== '') {
        newElement.id = idName;
    };
    newElement.textContent = textContent;

    for (let attribute in attributes) {
        newElement.setAttribute(attribute, attributes[attribute]);
    };

    return newElement;
};