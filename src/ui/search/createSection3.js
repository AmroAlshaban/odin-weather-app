import { createNewElement } from "../../utilities/helpers/create_new_element";
import { getPreSearchNode } from "../../home_node";


export function createSection3(display=null) {
    const section2 = document.querySelector(".section2");
    if (section2) {
        let nextSibling = section2.nextElementSibling;
        while (nextSibling) {
            nextSibling.remove();
            nextSibling = section2.nextElementSibling;
        };
    };

    const section3 = createNewElement({
        className: 'section3',
    });

    if (display === null) {
        return getPreSearchNode();
        // return section3;
    };

    section3.appendChild(display);
    return section3;
};