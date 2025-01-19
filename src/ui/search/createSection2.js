import { createButtonListContainer, createButtonListElement, createButton } from "./createDataNavigation.js";
import { getNavigationEventListeners } from "./event_listeners/dataNavigationEventListeners.js";
import { createNewElement } from "../../utilities/helpers/create_new_element.js";


export function createSection2() {
    const liElementsIds = ['today', 'hourly', 'forecast'];
    const liElementsTextContent = ['Today', 'Hourly', 'Forecast'];

    const buttons = Array.from({ length: liElementsIds.length }, (_, index) => {
        const button = createButton({
            buttonId: liElementsIds[index],
            buttonText: liElementsTextContent[index],
            eventListeners: getNavigationEventListeners(liElementsIds[index]),
        });

        return button;
    });

    const liElements = Array.from({ length: liElementsIds.length }, (_, index) => {
        const liElement = createButtonListElement({
            buttonElement: buttons[index],
        });

        return liElement;
    });

    const ulElement = createButtonListContainer({
        liTags: liElements,
    });

    const navElement = createNewElement({
        nameTag: 'nav',
        className: 'section2',
    });

    navElement.appendChild(ulElement);
    return navElement;
};