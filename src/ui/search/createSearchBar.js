import { createNewElement } from "../../utilities/helpers/create_new_element";


export function createSearchBar({elementClassName, inputElement, imageElement}) {
    const searchBar = createNewElement({
        className: elementClassName,
    });

    searchBar.append(imageElement, inputElement);

    return searchBar;
};


export function createSearchBarImage({elementClassName, eventListeners=NaN}) {
    const searchBarImage = createNewElement({
        className: elementClassName,
    });

    if (!isNaN(eventListeners)) {
        eventListeners(searchBarImage);
    };

    return searchBarImage;
};


export function createSearchBarInput({inputType, inputPlaceholder, inputId, eventListeners=NaN}) {
    const inputElement = createNewElement({
        nameTag: 'input',
        idName: inputId,
        attributes: {
            type: inputType,
            placeholder: inputPlaceholder,
        },
    });

    if (!isNaN(eventListeners)) {
        eventListeners(inputElement);
    };

    return inputElement;
};