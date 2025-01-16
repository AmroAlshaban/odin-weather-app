import { createNewElement } from "../../utilities/helpers/create_new_element";


export function createButtonListContainer({liTags}) {
    const listContainer = createNewElement({
        nameTag: 'ul',
    });

    listContainer.append(...liTags);
    return listContainer;
};


export function createButtonListElement({buttonElement}) {
    const liElement = createNewElement({
        nameTag: 'li',
    });

    liElement.appendChild(buttonElement);
    return liElement;
};


export function createButton({buttonId, buttonText, eventListeners=NaN}) {
    const button = createNewElement({
        nameTag: 'button',
        idName: buttonId,
        textContent: buttonText,
    });

    if (!isNaN(eventListeners)) {
        eventListeners(button);
    };

    return button;
};