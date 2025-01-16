import { createButtonListContainer, createButtonListElement, createButton } from "./createDataNavigation.js";


export function createSection2() {
    const liElementsIds = ['today', 'hourly', 'previousdate', 'forecast'];
    const liElementsTextContent = ['Today', 'Hourly', 'Previous Date', 'Forecast'];

    const buttons = Array.from({ length: liElementsIds.length }, (_, index) => {
        const button = createButton({
            buttonId: liElementsIds[index],
            buttonText: liElementsTextContent[index],
            eventListeners: NaN,
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