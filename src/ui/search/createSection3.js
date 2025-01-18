import { createNewElement } from "../../utilities/helpers/create_new_element";


export function createSection3(display=null) {
    const checkSection3 = document.querySelector(".section3");
    if (checkSection3) {
        checkSection3.parentNode.removeChild(checkSection3);
    };

    const section3 = createNewElement({
        className: 'section3',
    });

    if (display === null) {
        return section3;
    };

    section3.appendChild(display);
    return section3;
};