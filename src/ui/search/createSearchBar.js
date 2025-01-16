import { createNewElement } from "../../utilities/helpers/create_new_element";


export function createSearchBar({elementClassName, inputElement, imageElement}) {
    const searchBar = createNewElement({
        className: elementClassName,
    });

    searchBar.append(imageElement, inputElement);

    return searchBar;
};


export function createSearchBarImage({elementClassName}) {
    const searchBarImage = createNewElement({
        className: elementClassName,
    });

    return searchBarImage;
};


export function createSearchBarInput({inputType, inputPlaceholder, inputId}) {
    const inputElement = createNewElement({
        nameTag: 'input',
        idName: inputId,
        attributes: {
            type: inputType,
            placeholder: inputPlaceholder,
        },
    });

    return inputElement;
};