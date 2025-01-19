import { createSection1 } from "../createSection1";
import { createSection2 } from "../createSection2";
import { changeCurrentPage } from "../../current_page";


export function addSearchButtonEventListeners(node) {

    node.addEventListener("click", () => {
        changeCurrentPage('search');

        const main = document.querySelector("main");
        main.replaceChildren();

        const section1 = createSection1();
        const section2 = createSection2();

        main.append(section1, section2);
        document.querySelector("#hourly").dispatchEvent(new Event("click"));
    });

};