import { createSearchBarInput, createSearchBarImage, createSearchBar } from "./createSearchBar.js";
import { createNewElement } from "../../utilities/helpers/create_new_element";


export function createSection1() {
    const makeInputElement = createSearchBarInput({
        inputType: 'text',
        inputPlaceholder: 'Search City, State or Country',
        inputId: 'search_bar_write',
    });

    const makeSearchBarImage = createSearchBarImage({
        elementClassName: 'search_bar_image'
    });

    const makeSearchBar = createSearchBar({
        elementClassName: 'search_bar',
        inputElement: makeInputElement,
        imageElement: makeSearchBarImage,
    });

    const section1 = createNewElement({
        className: 'section1',
    });

    section1.appendChild(makeSearchBar);
    return section1;
};