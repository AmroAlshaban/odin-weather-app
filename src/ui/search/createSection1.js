import { createSearchBarInput, createSearchBarImage, createSearchBar } from "./createSearchBar.js";
import { createNewElement } from "../../utilities/helpers/create_new_element";
import { 
    addSearchBarEventListeners, 
    addSearchImageEventListeners 
} from "./event_listeners/searchBarEventListeners.js";


export function createSection1() {
    const makeInputElement = createSearchBarInput({
        inputType: 'text',
        inputPlaceholder: 'Search City, State or Country',
        inputId: 'search_bar_write',
        eventListeners: addSearchBarEventListeners,
    });

    const makeSearchBarImage = createSearchBarImage({
        elementClassName: 'search_bar_image',
        eventListeners: addSearchImageEventListeners,
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