import { createSection1 } from "../createSection1";
import { createSection2 } from "../createSection2";
import { createSection3 } from "../createSection3";


export function addSearchButtonEventListeners(node) {

    node.addEventListener("click", () => {
        const main = document.querySelector("main");
        main.replaceChildren();

        const section1 = createSection1();
        const section2 = createSection2();
        // const section3 = createSection3();

        main.append(section1, section2);
    });

};