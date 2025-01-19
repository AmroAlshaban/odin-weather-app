import { setCurrentPage } from "../../current_page";
import { getAboutNode, setAboutNode } from "../../about_node";
import { detailsOpenClickEvent } from "./detailsOpenEventListener";


export function addAboutButtonEventListeners(node) {

    const summaries = document.querySelectorAll(".about-container summary");
    summaries.forEach((summary) => {
        detailsOpenClickEvent(summary);
        return summary;
    });

    if (getAboutNode() === null) {
        setAboutNode(document.querySelector(".about-container"));
        const main = document.querySelector("main");
        main.replaceChildren();
    };

    node.addEventListener("click", () => {
        setCurrentPage('about');

        const main = document.querySelector("main");
        main.replaceChildren();

        main.appendChild(getAboutNode())
    });

};